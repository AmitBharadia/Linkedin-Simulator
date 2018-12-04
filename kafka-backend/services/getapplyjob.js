var { Applyjob } = require("../models/Applyjobs");
var { Jobs } = require("../models/Jobs");

async function handle_request(msg, callback){
    console.log(
        "=====================In the kafka-backend get saved jobs====================="
      );
    console.log("In handle request:"+ JSON.stringify(msg));  

    try{ 
        let appliedjobs= await getAppliedjobs(msg.id);
        //let finalResult= await getJobDetails(appliedjobs);

        callback( null , {status:"success" , msg:appliedjobs});
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

function getAppliedjobs(user_id) {
    return Applyjob.find({ applicant_id: user_id}, { ApplyDate:1 , position:1,job_id:1,company:1,location:1 } )
    .exec();  
}

exports.handle_request = handle_request;