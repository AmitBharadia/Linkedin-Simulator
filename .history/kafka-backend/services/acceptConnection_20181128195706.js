var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { User } = require("../models/User");
var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Accept Connection request====================="
  );
  //msg.userId: logged in user msg.connectUser: request receiving user
  console.log("Message body:" + JSON.stringify(msg));
  User.findById(msg.userId).then(profile => {
    if (!profile) {
      callback(null, "User doesn't exist");
    } else {
      const newConnection = new Connection({
        user_id: msg.userId,
        connect_user_id: msg.connectUser.request_user_id,
        connect_first_name: msg.connectUser.request_first_name,
        connect_last_name: msg.connectUser.request_last_name,
        connect_summary: msg.connectUser.request_summary,
        connect_photo: msg.connectUser.request_photo
      });

      newConnection
        .save()
        .then(console.log("One side connection created"))
        .catch(err => callback(err, "Error creating connection"));

      const newConnection1 = new Connection({
        user_id: msg.connectUser.request_user_id,
        connect_user_id: msg.userId,
        connect_first_name: profile.first_name,
        connect_last_name: profile.last_name,
        connect_summary: profile.profileSummary,
        connect_photo: profile.profile_url
      });
      newConnection1
        .save()
        .then(console.log("two sided connection created"))
        .catch(err => callback(err, "Error creating connection"));
      console.log("Messsage:" + msg.userId + "  " + msg.connectUser._id);
      Invitation.deleteOne({
        user_id: msg.userId,
        request_user_id: msg.connectUser.request_user_id
      })
        .then(result => {
          callback(null, "Connected successfully");
        })
        .catch(err => {
          callback(err, "Error creating connection");
        });
    }
  });

  console.log(
    "======================Out of the kafka-backend Accept connection====================="
  );
}

exports.handle_request = handle_request;
