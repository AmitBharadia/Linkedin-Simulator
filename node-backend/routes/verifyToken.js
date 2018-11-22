var jwt = require('jsonwebtoken');
var CONST = require("../const");

/*
function generateToken(user) {
  var user = {  
   email : user.email,
   userid: user.userid
  };
  return token = jwt.sign(user,secrete_key, {
     expiresIn: 60 * 60 * 1 // expires in 1 hours
  });
}
*/

function verifyToken(token){

    return new Promise ( (resolve,reject) => {
        
    jwt.verify( token.substring(7), CONST.SECRET, function(err, user) {
        console.log(user);
        if (err) 
            resolve( { status:"error", msg:"token not verified"} );
        else 
            resolve( { status:"success" , msg: user.id  } ); 
    });
});
}

module.exports = {
  //generateToken,
  verifyToken
}