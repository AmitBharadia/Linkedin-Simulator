
var { Jobs } = require("../models/Jobs");
var { Savedjobs } = require("../models/Savedjobs");
var { Applyjob } = require("../models/Applyjobs");

async function handle_request(msg, callback){
    console.log(
        "=====================In the kafka-backend get all jobs====================="
      );
    console.log("In handle request:"+ JSON.stringify(msg));    
    try{
        let jobs=[]; 
        if( "jobid" in msg.query){

        jobs= await getAllJobs({_id:mongoose.Types.ObjectId(msg.query.jobid)});
        }else
        jobs= await getAllJobs(msg.query);
        
        let savedjobs= await getSavedJobs(msg.applicant_id);
        let appliedjobs= await getAppliedjobs(msg.applicant_id);

        callback( null , {status:"success" , msg:jobs ,appliedjobs:appliedjobs, savedjobs:savedjobs});
        console.log("=====================Out of the kafka-backend get all jobs=====================");
      }
    catch (error) {
        callback( null, { status: "error" ,msg:error });
        console.log("=====================In the kafka-backend get all jobs=====================" );
        }    
}

function getSavedJobs(user_id) {
    return Savedjobs.find({ applicant_id: user_id}, {job_id:1 ,_id:0})
    .exec();  
}

function getAppliedjobs(user_id) {
    return Applyjob.find({ applicant_id: user_id}, { job_id:1 ,_id:0 } )
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
         seniority:1,
         industry:1,
         recruiter_id:1
         })
    .limit(15)
    .sort({"_id":-1})
    .exec();  
}

exports.handle_request = handle_request;