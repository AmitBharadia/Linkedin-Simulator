var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Accept Connection request====================="
  );
  //msg.userId: logged in user msg.connectUser: request receiving user
  console.log("Message body:" + JSON.stringify(msg));

  console.log(
    "======================Out of the kafka-backend Accept connection====================="
  );
}

exports.handle_request = handle_request;
