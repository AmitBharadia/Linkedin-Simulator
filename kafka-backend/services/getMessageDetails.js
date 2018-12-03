var { Message } = require("../models/Message");
var mongoose = require("mongoose");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Message Details====================="
  );
  console.log("Inside the get method of get Message Details in services");
  console.log("Message details : " + JSON.stringify(msg));

  Message.find({
    $or: [
      { $and: [{ from_id: msg.id1 }, { to_id: msg.id2 }] },
      { $and: [{ from_id: msg.id2 }, { to_id: msg.id1 }] }
    ]
  })
    .sort([['post_date', -1]])
    .exec((err, messages) => {
      if (err) {
        console.log("Error occured");
        callback("Error occured", null);
      }
      if (messages) {
        callback(null, messages.reverse());
      } else {
        console.log("No messages not found");
        callback("No messages not found", null);
      }

      console.log(
        "=====================Out of the kafka-backend get MessageDetails====================="
      );
    });
}

exports.handle_request = handle_request;
