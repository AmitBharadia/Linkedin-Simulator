var { Message } = require("../models/Message");
var mongoose = require("mongoose");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get chat list====================="
  );
  console.log("Message details : " + JSON.stringify(msg));

  Message.find(
    { $or: [{ from_id: msg.id }, { to_id: msg.id }] },
    (err, messages) => {
      if (err) {
        console.log("Error occured");
        callback("Error occured", null);
      }
      if (messages) {
        var uniqueReciever=new Set();

        console.log("Success" , JSON.stringify(messages));
        var list=[];
        messages.map(message=>{
            console.log("message id",  message.from_id);
           if(!uniqueReciever.has(message.from_id) && message.from_id!=msg.id){
                var chatItem={};
                chatItem.id=message.from_id;
                chatItem.name=message.from_name;
                list.push(chatItem);
           }
           if(!uniqueReciever.has(message.to_id) && message.to_id!=msg.id){
            var chatItem={};
            chatItem.id=message.to_id;
            chatItem.name=message.to_name;
            list.push(chatItem);
           }
           uniqueReciever.add(message.from_id);
           uniqueReciever.add(message.to_id);
        });
        callback(null, list);
      } else {
        console.log("No messages not found");
        callback("No messages not found", null);
      }

      console.log(
        "=====================Out of the kafka-backend get chat list====================="
      );
    }
  );
}

exports.handle_request = handle_request;
