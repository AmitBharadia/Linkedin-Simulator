var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");
var { verifyToken } = require("./verifyToken");

router.get("/", async function(req, res, next) {
  console.log(
    "============================In the rest request get all job ====================="
  );
  let q = {};
  for (let key in req.query) {
    // q[key]=req.query[key];
    q[key] = { $regex: req.query[key], $options: "i" };
  }

  console.log(q);
  let verify = await verifyToken(req.get("Authorization"));
  console.log(verify);
  if (verify.status == "error") res.send({ status: "error", msg: verify.msg });
  else {
    //send body to kafka server
    kafka.make_request(
      "getAllJobs",
      "response_topic",
      { applicant_id: verify.msg, query: q },
      function(err, result) {
        if (err) {
          res.send({ status: "error", msg: "System Error, Try Again." });
        } else {
          console.log(result.msg);
          res.send({
            status: result.status,
            msg: result.msg,
            savedjobs: result.savedjobs
          });
        }
        console.log(
          "============================Out of the rest request get all job ====================="
        );
      }
    );
  }
});

module.exports = router;
