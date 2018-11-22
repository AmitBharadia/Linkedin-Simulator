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
  Applicant.findById(msg.userId).then(profile => {
    if (!profile) {
      callback(null, "User doesn't exist");
    } else {
      const newConnection = new Connection({
        userId: msg.userId,
        connect_user_id: msg.connectUser.userId,
        connect_first_name: msg.connectUser.first_name,
        connect_last_name: msg.connectUser.last_name,
        connect_summary: "Working for tcs",
        connect_photo: "uploads/img"
      });

      newConnection
        .save()
        .then(console.log("One side connection created"))
        .catch(err => callback(err, "Error creating connection"));

      const newConnection1 = new Connection({
        userId: msg.connectUser.userId,
        connect_user_id: msg.userId,
        connect_first_name: profile.first_name,
        connect_last_name: profile.last_name,
        connect_summary: "Working for ibm",
        connect_photo: "uploads/img1"
      });
      newConnection1
        .save()
        .then(console.log("two sided connection created"))
        .catch(err => callback(err, "Error creating connection"));

      Invitation.deleteOne({ userId: msg.userId });
    }
  });

  Invitation.deleteOne({});

  console.log(
    "======================Out of the kafka-backend Accept connection====================="
  );
}

exports.handle_request = handle_request;
