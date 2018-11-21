var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var CONST = require("../const");

var kafka = require("../kafka/client");

router.get("/", function(req, res, next) {
  console.log(
    "============================In of the rest request search people ====================="
  );
  console.log("Request query : " + JSON.stringify(req.query));
  //send body to kafka server
  kafka.make_request("get_people", "response_topic", req.query, function(
    err,
    users
  ) {
    console.log("in result");
    console.log("Result ", users, " Error:", err);
    if (!err && !users) {
      res.send({
        status: "error",
        msg: "Error occured",
        data: []
      });
    } else if (err) {
      res.send({ status: "error", msg: err });
    } else {
      res.send({
        status: "success",
        msg: "Recived list of users",
        data: users
      });
    }
    console.log(
      "============================out of the rest request search people ====================="
    );
  });
});

module.exports = router;
