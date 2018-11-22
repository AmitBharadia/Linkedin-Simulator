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
      Applicant.findById(msg.userId)
        .then(profile => {
          const newInvitation = new Invitation({
            user_id: msg.connectUser._id,
            request_user_id: msg.userId,
            request_first_name: profile.first_name,
            request_last_name: profile.last_name,
            request_summary: "Working for Adobe",
            request_photo: "/uploads/photo1"
          });
          newInvitation
            .save()
            .then(result => callback(null, result))
            .catch(err => callback(err, "Error creating invitation request"));
        })
        .catch(err => callback(err, "User not found"));
    }
  });
  console.log(
    "======================Out of the kafka-backend add connection====================="
  );
}

exports.handle_request = handle_request;
