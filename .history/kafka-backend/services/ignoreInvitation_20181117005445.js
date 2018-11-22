var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");

var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Invitation====================="
  );

  Invitation.deleteOne({
    user_id: msg.userId,
    request_user_id: msg.connectUser.userId
  })
    .then(result => {
      callback(null, "Connected successfully");
    })
    .catch(err => {
      callback(err, "Error creating connection");
    });

  console.log("Message body:" + JSON.stringify(msg));
  console.log(
    "======================Out of the kafka-backend get Invitation====================="
  );
}

exports.handle_request = handle_request;
