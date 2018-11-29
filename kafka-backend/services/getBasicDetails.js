var { User } = require("../models/User");
var mongoose = require("mongoose");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get basic details====================="
  );
  console.log("Message details : " + JSON.stringify(msg));

  User.findOne(
    { _id: mongoose.Types.ObjectId(msg.id) },
    "first_name last_name profile_url",
    (err, user) => {
      if (err) {
        console.log("Error occured");
        callback("Error occured", null);
      }
      if (user) {
        callback(null, user);
      } else {
        console.log("No user present");
        callback("No user present", null);
      }

      console.log(
        "=====================Out of the kafka-backend get basic details====================="
      );
    }
  );
}

exports.handle_request = handle_request;
