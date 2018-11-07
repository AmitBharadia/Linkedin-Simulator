var LocalStrategy   = require('passport-local').Strategy;
var kafka = require('../kafka/client');

module.exports = function(passport){

	passport.use('signin', new LocalStrategy({
            passReqToCallback : true,
            usernameField:'email',
            passwordField:'password',
        }, function(req, username, password, done) { 
            
            console.log(JSON.stringify(req.body))
            // check in mongo if a user with username exists or not
            
            kafka.make_request('post_signin','response_signup',{"email":username,"password":password}, function(err,results){
                console.log('in result');
                console.log(results);
                if (err){
                    return done(err)
                }
                 else
                {
                    if(results.status == "success"){
                        return done(null, results.user)
                    }
                    else {
                        const error = new Error('Incorrect password.');
                        error.name = 'IncorrectCredentialsError';
                        return done(error);                    
                    }
                }
            });

        })
    );

    
}