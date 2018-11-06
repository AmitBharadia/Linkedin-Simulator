
var express = require('express');
var router = express.Router();
//var jwt = require('./jwt');

var kafka = require('../kafka/client');

router.post('/', function(req, res, next) {

    //send body to kafka server
    kafka.make_request('post_signin', 'response_signup' , {
        "email":req.body.user.email,
        "password":req.body.user.password,        
        }, function(err,results){
        
        console.log('in result');
        console.log(results);

        if (err){
            res.send({ status:"error", msg:"System Error, Try Again." });
        }else{
            res.send({ status:results.status, msg : results.msg , token:results.token });
            }        
    });
     
  });
 

module.exports = router;


/*
var express = require('express');
var router = express.Router();

module.exports = function(passport){

	router.post('/signin', (req, res, next) => {
     passport.authenticate('signin', (err, user) => {
          if (err) {
            if (err.name === 'IncorrectCredentialsError') {
              return res.json({
                status : "error",
                msg: err.message
              });
            }
               return res.json({
                status : "error",
                msg: 'Could not process the form.'
            });
          }
          var userid = user._id;
          req.logIn(user, function(err,user) {
            if (err) { return next(err); }
           
            return res.json({
              userid : userid,
              status : "success",
              msg:"Successfully Logged In."
            })

          });  
          
        })(req, res, next);
      });

	router.get('/user', function(req, res){
        if(req.isAuthenticated()){
             res.json({ 
                user: req.user,
                status: "success",
                msg:"Welcome to Dropbox."
             });
        }else{
            console.log("err")
            res.json({ 
                status: "error",
                msg:"Please Log In again",
                user:""
             });
        }
        
       
	});

	router.get('/logout', function(req, res) {
    console.log("I am Logout")
    //req.session.distory();
    req.logout(); 
    
    res.json({ 
            status: "logout",
            msg:"Please Log In again",
           
         });

    
});
	return router;
}
*/