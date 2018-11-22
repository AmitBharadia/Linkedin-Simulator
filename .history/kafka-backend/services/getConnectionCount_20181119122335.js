var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get connection count====================="
  );
  console.log("Message body:" + JSON.stringify(msg));

  console.log(
    "======================Out of the kafka-backend get Connection count====================="
  );
}

exports.handle_request = handle_request;
