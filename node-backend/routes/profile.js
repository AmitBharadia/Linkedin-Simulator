var express = require("express");
var router = express.Router();

var kafka = require("../kafka/client");

router.post("/profile",function(req,res,next){

    console.log("============================In of the rest request profile =====================");
    console.log("Request body:",JSON.stringify(req.body));

    


})