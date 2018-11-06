var jwt = require('jsonwebtoken');
const secrete_key = "homeaway_vamshireddy"

function generateToken(user) {
  var user = {
   email : user.email,
   userid: user.userid
  };
  return token = jwt.sign(user,secrete_key, {
     expiresIn: 60 * 60 * 1 // expires in 1 hours
  });
}

function verifyToken(token){

    return new Promise ( (resolve,reject) => {

    jwt.verify( token, secrete_key, function(err, user) {
        console.log(user);
        if (err) 
            resolve( { status:"error", msg:"token not verified"} );
        else 
            resolve( { status:"success" ,msg: { userid: user.userid , email:user.email }} ); 
    });
});
}

module.exports = {
  generateToken,
  verifyToken
}