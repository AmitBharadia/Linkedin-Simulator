var express = require("express");
var router = express.Router();

var kafka = require("../kafka/client");

router.put("/updateprofile",function(req,res,next){

    console.log("============================In of the rest request profile =====================");
    console.log("Request body:",JSON.stringify(req.body));

    kafka.make_request("profile","response_profile",req.body,

        function(err,result){
            if(err){
                res.send({status:"error",msg:err});
            }else{
                console.log("In the result of the Profile of node backend")
                res.send({
                    
                    result:JSON.stringify(result)
                });
                console.log(
                    "============================out of the rest request profile====================="
                  );
            }
        }
    )
})


router.get("/getprofile",function(req,res,next){
    console.log("============================In of the rest request profile =====================");
    console.log("Inside the get profile of node backend")

    kafka.make_request("getprofile","response_getprofile",req.body,
        function(err,result){
            if(err){
                res.send({status:"error",msg:err});
            }else{
                console.log("In the result of the Get Profile of node backend")
                res.send({
                    
                   result
                });
                console.log(
                    "============================out of the rest request profile====================="
                  );
            }
        }
    )
})


module.exports = router;