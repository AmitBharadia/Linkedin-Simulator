const Profile = require("../models/Profile");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Profile====================="
  );
  console.log("Inside the get method of profile in services");
  console.log("Message details : " + JSON.stringify(msg));
  Profile.findOne({ user_id: msg.id }).then(exiprofile => {
    if (exiprofile) {
      console.log("Success");
      callback(null, exiprofile);
    } else {
      //callback("Profile not found",null)
      console.log("Error occured");
    }
  });
}

exports.handle_request = handle_request;
