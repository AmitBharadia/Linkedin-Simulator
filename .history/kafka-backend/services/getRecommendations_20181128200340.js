var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { User } = require("../models/User");

var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Recommendation====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  User.find(
    {},
    {
      first_name: 1,
      last_name: 1,
      _id: 1,
      request_summary: 1,
      request_photo: 1
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
  )
    .reverse({ _id: 1 })
    .limit(40);
}

exports.handle_request = handle_request;
