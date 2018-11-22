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

router.get(
  "/getInvitations",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {
    console.log("==========Inside get Invitations request==============");
    var user = req.user.id;
    kafka.make_request(
      "post_invitations",
      "response_invitations",
      user,
      function(err, results) {
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
      }
    );
  }
);

router.get(
  "/getRecommendations",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {
    console.log("==========Inside get Recommendations request==============");
    var user = req.user.id;
    kafka.make_request(
      "get_recommendations",
      "post_recommendations",
      user,
      function(err, results) {
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
      }
    );
  }
);

router.post(
  "/removeConnection/:id",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {
    console.log("==========Inside Remove connection request==============");
    var user = req.user.id;
    var removeId = req.param.id;
    var request = { user, removeId };
    kafka.make_request("removeConnection", request, function(err, results) {
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
      console.log("========out of the remove connection request===========");
    });
  }
);

router.get(
  "/ignoreInvitation/:id",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {
    console.log("==========Inside Ignore Invitation request==============");
    var user = req.user.id;
    var removeId = req.param.id;
    var request = { user, removeId };
    kafka.make_request("ignoreInvitation", request, function(err, results) {
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
      console.log("========out of the Ignore invitation request===========");
    });
  }
);

router.get(
  "/addConnection/:id",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {
    console.log("==========Inside Add connection request==============");
    var user = req.user.id;
    var addId = req.param.id;
    var request = { user, addId };
    kafka.make_request("addConnection", request, function(err, results) {
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
      console.log("========out of the Add connection request===========");
    });
  }
);

module.exports = router;
