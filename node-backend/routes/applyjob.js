var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");
var {verifyToken}=require("./verifyToken");


router.post("/", async function(req, res, next) {
  
  console.log(req.headers.authorization);
  let verify= await verifyToken(req.get("Authorization"));
  console.log(verify);   
  if(verify.status == "error")
      res.send( { status:"error" , msg: verify.msg });
  else{    
  //send body to kafka server
  kafka.make_request(
    "applyjob",
    "response_topic",
    { job_id : req.body.job_id , applicant_id:verify.msg },
    function(err, result) {
      
        if (err){
            res.send({ status:"error", msg:"System Error, Try Again." });
        }else{
          console.log(result.msg);
            res.send({ status:result.status, msg : result.msg });
            } 
     
      });
    }
     
});


module.exports = router;
