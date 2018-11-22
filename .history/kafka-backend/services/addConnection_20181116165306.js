var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { Network } = require("../models/Network");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Add Connection request====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  //   Network.find({}, (err, users) => {
  //     if (err) {
  //       console.log("Error occured while user sign up");
  //       callback(err, "Error occured");
  //     } else if (users) {
  //       console.log("Users found: ", users);
  //       callback(null, users);
  //     }
  Applicant.findOne({ user: msg.userId }).then(profile => {
    Network.findOne({ user: msg.connectUser.userId })
      .then(user => {
          if(user)
          {
        if (
          user.connections.filter(
            user => connections.user.toString() === msg.userId
          ).length > 0
        ) {
          callback(err, "User already Connected");
        } else if (
          user.invitations.filter(
            user => invitations.user.toString() === msg.userId
          ).length > 0
        ) {
          callback(err, "User already Invited");
        }
    }
    else{
        user.invitations.unshift({
          user: msg.userId,
          first_name: profile.first_name
        });

        user.save().then(user => callback(null, user));
      }})
      .catch(err => callback(err, "Error connecting"));
  });
}
  console.log(
    "======================Out of the kafka-backend add connection====================="
  );
}

exports.handle_request = handle_request;
