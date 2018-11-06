var mongo = require('./mongo');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('./jwt');

async function handle_request(msg, callback){

    console.log("In handle request:"+ JSON.stringify(msg));
    var db = mongo.getconnection();   
    var email = msg.email;
    var password = msg.password;    
    try { 
        let result = await UserExists(email ,db );
        //check if user exists
        if(result.status === "error")
        callback( null , { msg : result.msg , status : result.status ,token:"" });
        else{
        //check if password matches
            if ( bcrypt.compareSync( password , result.msg.password )   )
            {
                let cc={
                    email: result.msg.email,
                    userid: result.msg._id
                  }
                  console.log(cc.userid);
                  var token = jwt.generateToken(cc);
                  console.log("calling sigin callback");
                callback( null , { msg : "successfully logged in" , status : "success" ,token:token});
            }    
            else    
                callback( null, { status: "error" ,msg: "Authentication failed" ,token:""})
        } 
    } catch (error) {
        callback( null, { status: "error" ,msg:error,token:"" });
    }      
}

function UserExists(email , db)
{
    return new Promise ( (resolve,reject) => {
        db.collection('userdata').findOne({email:email}, function(err, doc){
            if (err)
                resolve( { status:"error", msg: "System Error, Please try later." })
            
            // if user exists
            else if(doc) 
                resolve( { status:"success" , msg : doc });
            
            else             
                resolve( { status: "error" ,msg: "Account Does not exist"})
                 
        });
       })    
}

exports.handle_request = handle_request;