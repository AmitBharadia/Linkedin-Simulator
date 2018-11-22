
var { Savedjobs } = require("../models/Savedjobs");

async function handle_request(msg, callback){
    console.log(
        "=====================In the kafka-backend get saved jobs====================="
      );
    console.log("In handle request:"+ JSON.stringify(msg));    
    console.log("In handle request:"+ JSON.stringify(msg));    
    try{ 
        let savedjobs= await getSavedJobs(msg.applicant_id);
        callback( null , {status:"success" , msg:savedjobs});
        console.log(
            "=====================Out of the kafka-backend get saved jobs====================="
          );
      }
    catch (error) {
            callback( null, { status: "error" ,msg:error });
            console.log(
                "=====================Out of the kafka-backend get saved jobs====================="
              );
        }    
}

function getSavedJobs(user_id) {
    return Savedjobs.find({ applicant_id: user_id}, {job_id:1 ,location:1,position:1,company:1 , recruiter_id:1 ,applicant_id:1 })
    .exec();  
}

exports.handle_request = handle_request;