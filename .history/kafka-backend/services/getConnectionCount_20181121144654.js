var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get connection count====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  Connection.find({ user_id: msg.userId })
    .count()
    .then(count => {
      console.log(count);
      if (count) callback(null, count);
      else {
        count = 0;
        callback(null, count);
      }
    });

  console.log(
    "======================Out of the kafka-backend get Connection count====================="
  );
}

exports.handle_request = handle_request;
