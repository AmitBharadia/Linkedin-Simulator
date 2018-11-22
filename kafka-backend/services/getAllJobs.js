
var { Jobs } = require("../models/Jobs");
var { Savedjobs } = require("../models/Savedjobs");

async function handle_request(msg, callback){
    console.log(
        "=====================In the kafka-backend get all jobs====================="
      );
    console.log("In handle request:"+ JSON.stringify(msg));    
    try{ 
        let jobs= await getAllJobs(msg.query);
        let savedjobs= await getSavedJobs(msg.applicant_id);
        callback( null , {status:"success" , msg:jobs , savedjobs:savedjobs});
        console.log(
            "=====================Out of the kafka-backend get all jobs====================="
          );
      }
    catch (error) {
            callback( null, { status: "error" ,msg:error });
            console.log(
                "=====================In the kafka-backend get all jobs====================="
              );
        }    
}

function getSavedJobs(user_id) {
    return Savedjobs.find({ applicant_id: user_id}, {job_uuid:1 ,_id:0})
    .exec();  
}

function getAllJobs( q) {
    return Jobs.find( q , {description:1, _id:1,job_id:1, position: 1,location:1,
        easyApply:1, 
        company:1, 
         company_logo:1,
         employment_type:1,
         required_skills: 1,
         required_experience: 1,
         required_eductaion:1,
         recruiter_id:1
         })
    .limit(10)
    .exec();  
}


exports.handle_request = handle_request;


 
