var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");
var { verifyToken } = require("./verifyToken");
const redisClient = require("../Redis/redisCache");

let queryFilter = input => {
  let q = {};

  for (let key in input) {
    if (key === "jobid") {
      q["jobid"] = input[key];
    } else if (key === "company") {
      var array = JSON.parse(input[key]);
      let len = array.length;
      q["$or"] = [];
      for (let i = 0; i < len; i++) {
        q["$or"].push({ company: { $regex: array[i], $options: "i" } });
      }
    } else if (key === "seniority") {
      var array = JSON.parse(input[key]);
      let len = array.length;
      q["$or"] = [];
      for (let i = 0; i < len; i++) {
        q["$or"].push({ seniority: { $regex: array[i], $options: "i" } });
      }
    } else q[key] = { $regex: input[key], $options: "i" };
  }
  return q;
};

router.get("/", async function(req, res, next) {
  let q = queryFilter(req.query);

  let verify = await verifyToken(req.get("Authorization"));

  // console.log(verify);

  if (verify.status == "error") res.send({ status: "error", msg: verify.msg });
  else {
    redisClient.get(JSON.stringify(req.query), function(err, reply) {
      //console.log(JSON.stringify(reply));
      if (err) res.send({ error: err });
      else if (reply == null) {
        let m = { applicant_id: verify.msg, query: q };

        kafka.make_request("getAllJobs", "response_topic", m, function(
          err,
          result
        ) {
          if (err) {
            res.send({ status: "error", msg: "System Error, Try Again." });
          } else {
            console.log(result.msg);
            console.log(q);
            redisClient.set(
              JSON.stringify(req.query),
              JSON.stringify(result),
              function(err, reply2) {
                console.log(reply2);
                redisClient.expire(q, 300);
              }
            );
            res.send({
              status: result.status,
              msg: result.msg,
              savedjobs: result.savedjobs
            });
          }
          console.log(
            "============================Out of the rest request get all job ====================="
          );
        });
      } else {
        //console.log(reply.toString());
        let x = JSON.parse(reply);
        res.send({
          status: x.status,
          msg: x.msg,
          savedjobs: x.savedjobs
        });
      }
    });
  }
});

async function getfn2(key) {
  let response = await redisClient.getAsync(key);
  console.log("Response from getfn2:-");
  console.log(response);
}

router.post("/view", async function(req, res, next) {
  console.log(
    "============================In the rest request insert new job view====================="
  );
  console.log(" Request body ", JSON.stringify(req.body));
  kafka.make_request("jobview", "response_topic", req.body, function(
    err,
    result
  ) {
    if (err) {
      res.send({ status: "error", msg: "System Error, Try Again." });
    } else {
      console.log(result.msg);
      res.send({
        status: result.status,
        msg: result.msg
      });
    }
    console.log(
      "============================Ou of the rest request insert new job view====================="
    );
  });
  // }
});

module.exports = router;
