import Invitations from "../../.history/frontend/src/components/Connections/Invitations/Invitations_20181114140033";
var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Invitation====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  Network.find(
    {
      user: msg
    },
    { invitations: 1, user: 0, connections: 0, recommendations: 0 },
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
