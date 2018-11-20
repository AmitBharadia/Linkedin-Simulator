
var { Jobs } = require("../models/Jobs");

async function handle_request(msg, callback){
    
    //console.log("In handle request:"+ JSON.stringify(msg));    
    try{ 
        let jobs= await getAllJobs();
        callback( null , {status:"success" , msg:jobs });      }
    catch (error) {
            callback( null, { status: "error" ,msg:error });
        }    
}

function getAllJobs() {
    return Jobs.find({  }, {description:1, _id:1,job_id:1, position: 1,location:1,
        easyApply:1, 
        company:1, 
        // company_logo:1,
        // employment_type:1,
        // required_skills: 1,
        // required_experience: 1,
        // required_eductaion:1
         })
    .limit(10)
    .exec();  
}


exports.handle_request = handle_request;


 
