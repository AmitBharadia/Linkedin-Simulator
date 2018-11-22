var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var CONST = require("../const");
var { verifyToken } = require("./verifyToken");

var kafka = require("../kafka/client");

router.get(
  "/getInvitations",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {
    console.log("==========Inside get Invitations request==============");
    var user = req.user.id;
    kafka.make_request("getInvitations", user, function(err, results) {
      console.log("in result");
      console.log("Result ", results, " Error:", err);
      if (!err && !results) {
        res.send({
          status: "error",
          msg: "Error occured"
        });
      } else if (err) {
        res.send({ status: "error", msg: err });
      } else {
        res.send({
          status: "success",
          msg: results
        });
      }
      console.log("========out of the get Invitation request===========");
    });
  }
);

router.get(
  "/getRecommendations",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {
    console.log("==========Inside get Recommendations request==============");
    var user = req.user.id;
    kafka.make_request("getRecommendations", user, function(err, results) {
      console.log("in result");
      console.log("Result ", result, " Error:", err);
      if (!err && !results) {
        res.send({
          status: "error",
          msg: "Error occured"
        });
      } else if (err) {
        res.send({ status: "error", msg: err });
      } else {
        res.send({
          status: "success",
          msg: results
        });
      }
      console.log("========out of the get Recommendation request===========");
    });
  }
);

router.get("/removeConnection/:id", function(req, res, next) {});

router.get("/ignoreInvitation", function(req, res, next) {});

router.get("/addConnection", function(req, res, next) {});

module.exports = router;
