var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get connection count====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  Connection.find({ user_id: msg.userId })
    .count()
    .then(count => {
      if (count > 0) callback(null, count);
      else {
        count = 0;
        callback(null, count);
      }
    })
    .catch(err => {
      count = 0;
      console.log(err);
    });

  console.log(
    "======================Out of the kafka-backend get Connection count====================="
  );
}

exports.handle_request = handle_request;
