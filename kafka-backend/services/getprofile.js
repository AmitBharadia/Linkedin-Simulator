
var { User } = require("../models/User");
var mongoose = require("mongoose");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Profile====================="
  );
  console.log("Inside the get method of profile in services");
  console.log("Message details : " + JSON.stringify(msg));
  User.findOne({ _id: mongoose.Types.ObjectId(msg.id) }, (err,exiprofile)=>{
    if(err){
      console.log("Error occured");
      callback("Error occured",null)
    }
    if (exiprofile) {
      console.log("Success");
      callback(null, exiprofile);
    } else {
      console.log("Profile not found");
      callback("Profile not found",null)
      
    }
    console.log(
      "=====================Out of the kafka-backend get Profile====================="
    );
  } )
}

exports.handle_request = handle_request;
