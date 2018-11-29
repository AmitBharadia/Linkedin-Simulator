var express = require("express");
var router = express.Router();
var { upload } = require("../s3");
var kafka = require("../kafka/client");

router.put("/updateprofile", upload.single("files"), function(req, res, next) {
  console.log(
    "============================In of the rest request update profile ====================="
  );
  console.log("Request body:", JSON.stringify(req.body));
  console.log("Request file:", JSON.stringify(req.file));

  if (req.file) {
    var url = req.file.location;
    console.log("The URL is : ", url);
    req.body.profile_url = url;
  }
  console.log("Request body:", JSON.stringify(req.body));

  kafka.make_request(
    "profile",
    "response_topic",
    req.body,

    function(err, result) {
      if (err) {
        res.send({ status: "error", msg: err });
      } else {
        console.log("In the result of the Profile of node backend");
        res.send({
          result: JSON.stringify(result)
        });
        console.log(
          "============================out of the rest request update profile====================="
        );
      }
    }
  );
});

router.get("/getprofile", function(req, res, next) {
  console.log(
    "============================In of the rest request get profile ====================="
  );
  console.log("Inside the get profile of node backend");
  console.log("Request query : " + JSON.stringify(req.query));

  kafka.make_request("getprofile", "response_topic", req.query, function(
    err,
    result
  ) {
    if (err) {
      res.send({ status: "error", msg: err });
    } else {
      console.log("In the result of the Get Profile of node backend");
      res.send({
        result
      });
      console.log(
        "============================out of the rest request get profile====================="
      );
    }
  });
});

module.exports = router;
