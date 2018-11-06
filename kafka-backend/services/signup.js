var mongodb = require('./mongo');
var bCrypt = require('bcrypt-nodejs');

async function handle_request(msg, callback){
    
//    console.log("Inside signup kafka backend");
  //  console.log(msg);
  var db = mongodb.getconnection();       
  
  var firstname = msg.firstname.trim();
  var lastname = msg.lastname.trim();
  var email = msg.email.trim();
  var password = msg.password.trim();  
           
  if(validateEmail(email)) {

    var result = await checkIfUserAlreadyExists( email,password,firstname,lastname ,db);

    if(result.status ==="error")
    callback( null , { msg : result.msg , status : result.status });
    else{
        var result2= await UpdateDatabase( result.msg ,db);

        callback( null , { msg : result2.msg , status : result2.status });
    }  

    }
  else   
       callback(null, { msg : 'Invalid Email addesss', status : 'error' });     

};

var createHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkIfUserAlreadyExists( email,password,firstname,lastname,db ){
    return new Promise ( (resolve,reject) => {
     db.collection('userdata').findOne({email:email}, function(err, doc){
         if (err){
             resolve( { status:"error", msg: "System Error, Please try later." })
         }
         // if user exists
         else if(doc) {
             resolve( { status: "error" ,msg: "Account already exist"})
         }
         else 
         {
             let  details={ 
                 aboutme:"",
                 city : "",
                 company : "",
                 school:"",
                 hometown : "",
                 gender : "",
                 languages: "",
                 mobile: "",
                 firstname:firstname,
                 lastname:lastname,
                 email:email,
                 password: createHash(password),
                 profilePic: "uploads/default.png",
             }
             resolve( { status:"success" , msg : details });
         }     
     });
    })
}

function UpdateDatabase (data ,db ){
    return new Promise ( (resolve,reject) => {
        db.collection('userdata').insert( data , function(err,result){        
            if(err){
                resolve({ msg : 'Invalid Email addesss',status : 'error'});
                  }
            else {                   
                resolve({ msg : 'Account created successfully',status : 'success'});     
                }
          });
    });
}

  

exports.handle_request = handle_request;


