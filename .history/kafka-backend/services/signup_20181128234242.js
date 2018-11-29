var bcrypt = require("bcryptjs");
var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { User } = require("../models/User");
var query = require("../query/userCreation.js");

async function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Signup====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  if (!msg.isRecruiter) {
    msg.type = "applicant";
  } else if (msg.isRecruiter) {
    msg.type = "recruiter";
  } else {
    callback("No valid type mentioned", null);
  }
  validateAndCreateUser(msg, callback);
}

function validateAndCreateUser(msg, callback) {
  User.find({ username: msg.username }, (err, users) => {
    if (err) {
      callback("Error occured", null);
    } else {
      console.log("User Found", JSON.stringify(users));
      if (users && users.length > 0) {
        callback("Username already present", null);
      } else {
        createUser(msg, callback);
      }
      console.log(
        "============================Out of the kafka-backend Signup====================="
      );
    }
  });
}

async function createUser(msg, callback) {
  User.create(
    {
      first_name: msg.first_name,
      last_name: msg.last_name,
      username: msg.username,
      type: msg.type,
      profile_url: "https://s3.amazonaws.com/linkedin-273/Profile/dummy.png"
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
            callback("Error occured", null);
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
