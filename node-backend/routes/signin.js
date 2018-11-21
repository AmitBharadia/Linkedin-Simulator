var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var CONST = require("../const");

var kafka = require("../kafka/client");

router.post("/", function(req, res, next) {
  console.log(
    "============================In of the rest request signin ====================="
  );
  console.log("Request body:" + JSON.stringify(req.body));
  //send body to kafka server
  kafka.make_request(
    "post_signin",
    "response_topic",
    {
      username: req.body.username,
      password: req.body.password
    },
    function(err, user) {
      console.log("in result");
      console.log("Result ", user, " Error:", err);
      if (!err && !user) {
        res.send({
          status: "error",
          msg: "Error occured"
        });
      } else if (err) {
        res.send({ status: "error", msg: err });
      } else {
        var token = jwt.sign({ id: user.id }, CONST.SECRET, {
          expiresIn: 10080 // in seconds
        });
        console.log("Token", token);
        res.send({
          status: "success",
          msg: "",
          data:user,
          token: "Bearer " + token
        });
      }
      console.log(
        "============================out of the rest request signin ====================="
      );
    }
  );
});

module.exports = router;
