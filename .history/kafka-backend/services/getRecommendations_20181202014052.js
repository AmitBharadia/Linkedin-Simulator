var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");
var { User } = require("../models/User");

var { Invitation } = require("../models/Invitation");
var { Connection } = require("../models/Connection");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Recommendation====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  var arr = [];
  console.log(msg);
  Invitation.find(
    { request_user_id: msg },
    { user_id: 1, _id: 0 },
    (err, result) => {
      if (result) {
        console.log("Inside if");
        console.log("result:" + result);
        result.map(res => {
          console.log("res" + res.user_id);
          arr.push(res.user_id);
        });
      }
      console.log("arr:" + arr);
      User.find(
        {
          _id: {
            $ne: msg,
            $nin: arr
          }
        },
        {
          first_name: 1,
          last_name: 1,
          _id: 1,
          profileSummary: 1,
          profile_url: 1
        },
        (err, users) => {
          console.log("Inside user find");
          if (err) {
            callback(err, "Error occured");
          } else if (users) {
            //console.log("Recommendation found: ", users);
            callback(null, users);
          }
          console.log(
            "======================Out of the kafka-backend get Recommendation====================="
          );
        }
      )
        .sort({ _id: -1 })
        .limit(20);
    }
  );
  console.log("Invitation array:" + arr);
}

exports.handle_request = handle_request;
