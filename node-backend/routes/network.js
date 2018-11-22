var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var CONST = require("../const");
var { verifyToken } = require("./verifyToken");
const passport = require("passport");
var kafka = require("../kafka/client");

router.post("/", passport.authenticate("jwt", { session: false }), function(
  req,
  res,
  next
) {
  console.log(
    "============================In of the network ====================="
  );
  console.log(req.user.id);
  console.log("------------------");
  console.log(req.get("Authorization"));
  console.log(
    "============================Out of the rest request network====================="
  );
});

router.get("/getInvitations", function(req, res, next) {
  console.log("==========Inside get Invitations request==============");
  var user = req.user.id;
  kafka.make_request("post_invitations", "response_topic", user, function(
    err,
    results
  ) {
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
});

router.get("/getRecommendations", function(req, res, next) {
  console.log("==========Inside get Recommendations request==============");
  var user = req.user.id;
  kafka.make_request("get_recommendations", "response_topic", user, function(
    err,
    results
  ) {
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
      console.log("Sending result");
      res.send({
        status: "success",
        msg: results
      });
    }
    console.log("========out of the get Recommendation request===========");
  });
});

router.post("/removeConnection", function(req, res, next) {
  console.log("==========Inside Remove connection request==============");
  console.log(req.body);
  var userId = req.user.id;
  var removeConnection = req.body;
  var request = { userId, removeConnection };
  kafka.make_request("remove_connection", "response_topic", request, function(
    err,
    results
  ) {
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
    console.log("========out of the remove connection request===========");
  });
});

router.post("/ignoreInvitation", function(req, res, next) {
  console.log("==========Inside Ignore Invitation request==============");
  var userId = req.user.id;
  var removeInvitation = req.body;
  var request = { userId, removeInvitation };
  kafka.make_request("ignore_Invitation", "response_topic", request, function(
    err,
    results
  ) {
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
    console.log("========out of the Ignore invitation request===========");
  });
});

router.post("/addConnection", function(req, res, next) {
  console.log(req);
  console.log("==========Inside Add connection request==============");
  var request = { userId: req.user.id, connectUser: req.body };

  kafka.make_request("add_connection", "response_topic", request, function(
    err,
    results
  ) {
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
    console.log("========out of the Add connection request===========");
  });
});

router.post("/acceptConnection", function(req, res, next) {
  console.log("==========Inside Accept connection request==============");
  console.log(req.body);
  var request = { userId: req.user.id, connectUser: req.body };

  kafka.make_request("accept_connection", "response_topic", request, function(
    err,
    results
  ) {
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
    console.log("========out of the Accept connection request===========");
  });
});

router.get("/getConnectionCount", function(req, res, next) {
  console.log("==========Inside get connection count request==============");

  var request = { userId: req.user.id };

  kafka.make_request(
    "get_connection_count",
    "response_topic",
    request,
    function(err, results) {
      console.log("in result");
      console.log("Result ", results, " Error:", err);
      if (!err && !results) {
        res.send({
          status: "success",
          msg: "0"
        });
      } else if (err) {
        res.send({ status: "error", msg: err });
      } else {
        res.send({
          status: "success",
          msg: results
        });
      }
      console.log("========out of the get connection count request===========");
    }
  );
});

router.get("/getAllConnections", function(req, res, next) {
  console.log("==========Inside get all connections request==============");
  var user = req.user.id;
  kafka.make_request("get_all_connections", "response_topic", user, function(
    err,
    results
  ) {
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
      console.log("Sending result");
      res.send({
        status: "success",
        msg: results
      });
    }
    console.log("========out of the get all connection request===========");
  });
});

module.exports = router;
