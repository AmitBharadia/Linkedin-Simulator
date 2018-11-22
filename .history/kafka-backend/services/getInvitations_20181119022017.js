var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");

var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Invitation====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  Invitation.find(
    { user_id: msg },
    { first_name: 1, last_name: 1, _id: 1 },
    (err, users) => {
      if (err) {
        callback(err, "Error occured");
      } else if (users) {
        console.log("Invitations found: ", users);
        callback(null, users);
      }
      console.log(
        "======================Out of the kafka-backend get Invitation====================="
      );
    }
  );
}

exports.handle_request = handle_request;
