var signin = require('./signin');

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent signin sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        // replace User with db.collection('userdata').
        User.findById(id, function(err, user) {
            //console.log('deserializing user:',user);
            done(null, user);
        });
    });

    // Setting up Passport Strategies for signin and SignUp/Registration
    signin(passport);
   
}