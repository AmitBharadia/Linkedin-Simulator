var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");
var { verifyToken } = require("./verifyToken");

router.get("/", async function(req, res, next) {
  console.log(
    "============================In the rest request save job ====================="
  );

  let verify = await verifyToken(req.get("Authorization"));
  console.log(verify);
  if (verify.status == "error") res.send({ status: "error", msg: verify.msg });
  else {
    //send body to kafka server
    kafka.make_request(
      "getsavedjobs",
      "response_topic",
      { applicant_id: verify.msg },
      function(err, result) {
        if (err) {
          res.send({ status: "error", msg: "System Error, Try Again." });
        } else {
          console.log(result.msg);
          res.send({ status: result.status, msg: result.msg });
        }
        console.log(
          "============================Out of the rest request save a job ====================="
        );
      }
    );
  }
});

router.post("/", async function(req, res, next) {
  //console.log(req.headers.authorization);
  console.log(
    "============================In the rest request save a job  ====================="
  );

  let verify = await verifyToken(req.get("Authorization"));
  console.log(verify);
  if (verify.status == "error") res.send({ status: "error", msg: verify.msg });
  else {
    //send body to kafka server

    kafka.make_request(
      "savejob",
      "response_topic",
      {
        job_id: req.body.job_id,
        applicant_id: verify.msg,
        recruiter_id: req.body.recruiter_id,
        location: req.body.location,
        position: req.body.position,
        company: req.body.company
      },
      function(err, result) {
        if (err) {
          res.send({ status: "error", msg: "System Error, Try Again." });
        } else {
          console.log(result.msg);
          res.send({ status: result.status, msg: result.msg });
        }
        console.log(
          "============================Out of the rest request save a job  ====================="
        );
      }
    );
  }
});

module.exports = router;
