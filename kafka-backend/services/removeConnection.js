var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");

var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend remove connection request====================="
  );
  console.log("Message body:" + JSON.stringify(msg));

  Connection.deleteOne({
    user_id: msg.userId,
    connect_user_id: msg.removeConnection.connect_user_id
  })
    .then(result => {
      callback(null, "One sided connection removed successfully");
    })
    .catch(err => {
      callback(err, "Error removing connection");
    });
  Connection.deleteOne({
    user_id: msg.removeConnection.connect_user_id,
    connect_user_id: msg.userId
  })
    .then(result => {
      callback(null, "Two sided connection removed successfully");
    })
    .catch(err => {
      callback(err, "Error removing connection");
    });

  console.log(
    "======================Out of the kafka-backend remove connection request====================="
  );
}

exports.handle_request = handle_request;
