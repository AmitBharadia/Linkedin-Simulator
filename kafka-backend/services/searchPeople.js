var bcrypt = require("bcryptjs");
var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { User } = require("../models/User");
var query = require("../query/userCreation.js");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Search People====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  User.find({
    first_name: { $regex: msg.name, $options: "i" }
  })
    .limit(30)
    .exec((err, users) => {
      if (err) {
        console.log("Error occured while user sign up");
        callback(err, "Error occured");
      } else if (users) {
        console.log("Users found: ", users);
        callback(null, users);
      }
      console.log(
        "======================Out of the kafka-backend Search People====================="
      );
    });
}

exports.handle_request = handle_request;
