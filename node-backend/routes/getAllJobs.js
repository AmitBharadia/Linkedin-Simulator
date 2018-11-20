var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");

router.get("/", function(req, res, next) {
  
  console.log(   "============================In of the rest request signin =====================" );

  //send body to kafka server
  kafka.make_request(
    "getAllJobs",
    "responseAllJobs",
    { },
    function(err, result) {
      
        if (err){
            res.send({ status:"error", msg:"System Error, Try Again." });
        }else{
          console.log(result.msg);
            res.send({ status:result.status, msg : result.msg });
            } 
     
      });
     
      console.log("============================out of the rest request signin =====================");
});


module.exports = router;
