var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Invitation====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  Applicant.find(
    {
      first_name: { $regex: msg.name, $options: "i" }
    },
    (err, users) => {
      if (err) {
        console.log("Error occured while user sign up");
        callback(err, "Error occured");
      } else if (users) {
        console.log("Users found: ", users);
        callback(null, users);
      }
      console.log(
        "======================Out of the kafka-backend get Invitation====================="
      );
    }
  );
}

exports.handle_request = handle_request;
