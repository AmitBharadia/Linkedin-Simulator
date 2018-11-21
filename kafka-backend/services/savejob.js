
var { Savedjobs } = require("../models/Savedjobs");

async function handle_request(msg, callback){
    
    console.log("In handle request:"+ JSON.stringify(msg));    
   
    let newjob=new Savedjobs({ "job_uuid":msg.job_uuid , "applicant_id":msg.applicant_id ,"location":msg.location ,"position":msg.position,
"company":msg.company , "recruiter_id":msg.recruiter_id});
try{
    let x= await newjob.save( ) ;
    callback(null , { status:"success",msg:x });

}catch(error){
    callback( null , { status:"error",msg:error });
    
}

}


exports.handle_request = handle_request;


 
