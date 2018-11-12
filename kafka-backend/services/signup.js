var bcrypt = require("bcryptjs");
var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var query = require("../query/userCreation.js");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Signup====================="
  );
  console.log("Message body:" + JSON.stringify(msg));

  if (!msg.isRecruiter) {
    createApplicant(msg, callback);
  } else if (msg.isRecruiter) {
    createRecruiter(msg, callback);
  } else {
    callback(err, "No valid type mentioned");
  }
}

function createApplicant(msg, callback) {
  Applicant.create(
    {
      first_name: msg.first_name,
      last_name: msg.last_name,
      username: msg.username
    },
    (err, user) => {
      if (err) {
        console.log("Error occured while user sign up");
        callback(err, "Error occured");
      } else if (user) {
        console.log("User created: ", user);
        msg.id = user._id.toString();
        query.createUser(msg, (err, user) => {
          if (err) {
            callback(err, "Error occured");
          } else {
            callback(null, true);
          }
          console.log(
            "======================Out of the kafka-backend Signup====================="
          );
        });
      }
    }
  );
}

function createRecruiter(msg, callback) {
  Recruiter.create(
    {
      first_name: msg.first_name,
      last_name: msg.last_name,
      username: msg.username
    },
    (err, user) => {
      if (err) {
        console.log("Error occured while user sign up");
        callback(err, "Error occured");
      } else if (user) {
        console.log("User created: ", user);
        msg.id = user._id.toString();
        query.createUser(msg, (err, user) => {
          if (err) {
            callback(err, "Error occured");
          } else {
            callback(null, true);
          }
          console.log(
            "======================Out of the kafka-backend Signup====================="
          );
        });
      }
    }
  );
}
exports.handle_request = handle_request;
