var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Recommendation====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  Applicant.find(
    {
      user: msg
    },{first_name:1,last_name:1,}
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
