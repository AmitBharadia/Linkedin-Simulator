var express = require('express');
var router = express.Router();

var kafka = require('../kafka/client');

router.post('/', function(req, res, next) {

    //send body to kafka server
    kafka.make_request('post_signup', 'response_signup' , {
        "email":req.body.email,
        "password":req.body.password,
        "firstname":req.body.firstname,
        "lastname":req.body.lastname
        }, function(err,results){
        console.log('in result');
        console.log(results);
        if (err){
            res.send({ status:"error", msg:"System Error, Try Again." });
        }else{
            res.send({ status:results.status, msg : results.msg });
            }        
    });

  });
 

module.exports = router;