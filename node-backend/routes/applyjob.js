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

    //recruiter_id, job_id, applicant_id, city, applied_date, job_name , resume(file link) , email address , workAuthorization (yes/no) ,  H1BSponsorship(yes/no)
  kafka.make_request(
    "applyjob",
    "response_topic",
    { details:req.body , applicant_id:verify.msg   },
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
