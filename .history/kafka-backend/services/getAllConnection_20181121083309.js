var { User } = require("../models/User");

var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get all Connection====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  Connection.find(
    { user_id: msg },
    {
      request_first_name: 1,
      request_last_name: 1,
      request_user_id: 1,
      request_summary: 1,
      request_photo: 1
    },
    (err, users) => {
      if (err) {
        callback(err, "Error occured");
      } else if (users) {
        console.log("Invitations found: ", users);
        callback(null, users);
      }
      console.log(
        "======================Out of the kafka-backend get Invitation====================="
      );
    }
  )
    .sort({ _id: 1 })
    .limit(1);
}

exports.handle_request = handle_request;
