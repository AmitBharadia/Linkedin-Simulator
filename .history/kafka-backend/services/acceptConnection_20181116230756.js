var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Accept Connection request====================="
  );
  //msg.userId: logged in user msg.connectUser: request receiving user
  console.log("Message body:" + JSON.stringify(msg));
  Applicant.findById(msg.userId).then(profile=>{
      if(!profile)
      {
        callback(null,"User doesn't exist")
      }
      else{
          const newConnection=new Connection({
              userId:msg.userId,
              connect_user_id:msg.connectUser.userId,
              connect_first_name:msg.connectUser.first_name,
              connect_last_name:msg.connectUser.last_name,
              
          })
      }
  })
  const newConnection=new Connection({
      userId:
  })
  Invitation.deleteOne({});

  console.log(
    "======================Out of the kafka-backend Accept connection====================="
  );
}

exports.handle_request = handle_request;
