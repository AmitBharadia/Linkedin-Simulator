
var { Savedjobs } = require("../models/Savedjobs");
var { Applyjob } = require("../models/Applyjobs");

async function handle_request(msg, callback){
    console.log(
        "=====================In the kafka-backend get saved jobs====================="
      );
    console.log("In handle request:"+ JSON.stringify(msg));    
    console.log("In handle request:"+ JSON.stringify(msg));    
    try{ 
        let savedjobs= await getSavedJobs(msg.applicant_id);
        let appliedjobs= await getAppliedjobs(msg.applicant_id);
        callback( null , {status:"success" , msg:savedjobs , appliedjobs: appliedjobs});
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
    return Savedjobs.find({ applicant_id: user_id}, { job_id:1 ,location:1,position:1,company:1 , recruiter_id:1  })
    .exec();  
}
function getAppliedjobs(user_id) {
    return Applyjob.find({ applicant_id: user_id}, { job_id:1 ,_id:0 } )
    .exec();  
}

exports.handle_request = handle_request;