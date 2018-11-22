var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Add Connection request====================="
  );
  //msg.userId: logged in user msg.connectUser: request receiving user
  console.log("Message body:" + JSON.stringify(msg));
  Invitation.findOne({
    user_id: msg.connectUser._id,
    request_user_id: msg.userId
  }).then(existing => {
    if (existing) {
      callback(null, "Already pending request");
    } else {
      Applicant.findById(msg.userId).then(profile => {
        const newInvitation = new Invitation({
          user_id: msg.connectUser._id,
          request_user_id: msg.userId
        });
      });
    }
  });
  console.log(
    "======================Out of the kafka-backend add connection====================="
  );
}

exports.handle_request = handle_request;
