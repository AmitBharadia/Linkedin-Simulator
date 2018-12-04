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
  let arr;
  Invitation.find({ request_user_id: msg }, { user_id: 1 }, (result, err) => {
    if (result) {
      console.log("result:" + result);
      result.map(res => {
        console.log("res" + res);
        arr.push(res.user_id);
      });
    }
  });
  console.log("Invitation array:" + arr);
  User.find(
    {
      _id: {
        $ne: msg,
        $ne: arr
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
    .limit(2);
}

exports.handle_request = handle_request;
