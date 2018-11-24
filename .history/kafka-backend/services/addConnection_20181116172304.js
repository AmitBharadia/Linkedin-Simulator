var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { Network } = require("../models/Network");
function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Add Connection request====================="
  );
  //msg.userId: logged in user msg.connectUser: request receiving user
  console.log("Message body:" + JSON.stringify(msg));

  Applicant.findById(msg.userId)
    .then(loggedUser => {
      Network.findOne({ user: msg.connectUser.userId })
        .then(inviteUser => {
          if (!inviteUser) {
            const newUser = new Network({
              userId: msg.userId
            });
            newUser.save();
          }
          const newInvite = {
            userId: loggedUser._id,
            first_name: loggedUser.first_name
          };

          // Add to exp array
          inviteUser.invitations.unshift(newInvite);

          inviteUser.save().then(inviteUser => callback(null, inviteUser));
        })
        .catch(err => callback(err, "Error"));
    })
    .catch(err => callback(err, "Error"));

  console.log(
    "======================Out of the kafka-backend add connection====================="
  );
}

exports.handle_request = handle_request;
