var { Message } = require("../models/Message");
var mongoose = require("mongoose");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend send Message====================="
  );
  console.log("Message details : " + JSON.stringify(msg));
  Message.create(msg, (err, message) => {
    if (err) {
      console.log("Error occured");
      callback("Error occured", null);

    }
    if (message) {
      callback(null, message);
    } else {
      console.log("No messages not found");
      callback("No messages not found", null);
    }

    console.log(
      "=====================Out of the kafka-backend send message====================="
    );
  });

 
}

exports.handle_request = handle_request;
