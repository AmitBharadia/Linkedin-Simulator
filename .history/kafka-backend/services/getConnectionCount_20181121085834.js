var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get connection count====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  Connection.find(
    { user_id: msg }).count;
    (err, users) => {
      if (err) {
        callback(err, "Error occured");
      } else if (users) {
        console.log("connections found: ", users);
        callback(null, users);
      }
  
  console.log("Message body:" + JSON.stringify(msg));

  console.log(
    "======================Out of the kafka-backend get Connection count====================="
  );
}

exports.handle_request = handle_request;
