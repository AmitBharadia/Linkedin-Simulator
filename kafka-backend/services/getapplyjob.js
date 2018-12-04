var { Applyjob } = require("../models/Applyjobs");

async function handle_request(msg, callback){
    console.log(
        "=====================In the kafka-backend get saved jobs====================="
      );
    console.log("In handle request:"+ JSON.stringify(msg));  

    try{ 
        let savedjobs= await getSavedJobs(msg.id);
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
    console.log(" ------- "+typeof(user_id) );

    return Applyjob.find({ applicant_id: user_id}, { ApplyDate:1 , position:1, } )
    .exec();  
}

exports.handle_request = handle_request;