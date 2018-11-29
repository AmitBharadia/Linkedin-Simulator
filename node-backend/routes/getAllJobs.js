var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");
var { verifyToken } = require("./verifyToken");
       
router.get("/", async function(req, res, next) {
  
  let q = {};
  
  for (let key in req.query) {

    if(key==="jobid"){
      q["jobid"]=req.query[key]
    }
    else if(key==="company")
    {
      var array = JSON.parse( req.query[key] );
      let len=array.length;
      q["$or"]=[  ];
      for( let i=0; i<len; i++ )
      {
        q["$or"].push( {"company": { $regex: array[i] , $options: "i" }      });
      }
    }
    else if(key==="seniority")
    {
      var array = JSON.parse( req.query[key] );
      let len=array.length;
      q["$or"]=[  ];
      for( let i=0; i<len; i++ )
      {
        q["$or"].push( {"seniority": { $regex: array[i] , $options: "i" }      });
      }
    }
    else
       q[key] = { $regex: req.query[key], $options: "i" };
  
  }
console.log("   ----------   query    ---------");
  console.log(q);
  let verify = await verifyToken(req.get("Authorization"));
  console.log(verify);
  if (verify.status == "error") res.send({ status: "error", msg: verify.msg });
  else {
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


router.post("/view", async function(req, res, next) {

  let verify = await verifyToken(req.get("Authorization"));
  console.log(verify);

  if (verify.status == "error") 
      res.send({ status: "error", msg: verify.msg });
  else {

    kafka.make_request(
      "jobview",
      "response_topic",
      { applicant_id: verify.msg, recruiter_id: req.body.recruiter_id, job_id:req.body.job_id, 
        city:req.body.city , job_name:req.body.job_name },
      function(err, result) {
        if (err) {
          res.send({ status: "error", msg: "System Error, Try Again." });
        } else {
          console.log(result.msg);
          res.send({
            status: result.status,
            msg: result.msg,
          });
        }
        
      }
    );
  }
});

module.exports = router;
