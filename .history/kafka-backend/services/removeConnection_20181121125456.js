var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");

var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend remove connection request====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  Connection.find(
    {
      user: msg.userId
    },
    (err, users) => {
      if (err) {
        callback(err, "Error occured");
      } else if (users) {
        console.log("Recommendation found: ", users);
        callback(null, users);
      }
      console.log(
        "======================Out of the kafka-backend get Recommendation====================="
      );
    }
  );
}

exports.handle_request = handle_request;
