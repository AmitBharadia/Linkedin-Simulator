var bcrypt = require("bcrypt-nodejs");
var { Applicant } = require("../models/Applicant");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Sigin====================="
  );
  console.log("Request body:" + JSON.stringify(msg));

  Applicant.findOne({}).exec((err, applicant) => {
    if (err) {
      console.log("Error occured while user log in");
      callback(null, null);
    } else if (applicant) {
      console.log("User details: ", applicant);
      if (bcrypt.compareSync(msg.password, applicant.password)) {
        console.log("It is a valid user");
        callback(null, applicant);
      } else {
        console.log("Incorrect password");
        callback(err, "Invalid Password");
      }
    } else {
      callback(null, "emtpy");
    }
    console.log(
      "============================Out of the kafka-backend Signin====================="
    );
  });
}

exports.handle_request = handle_request;
