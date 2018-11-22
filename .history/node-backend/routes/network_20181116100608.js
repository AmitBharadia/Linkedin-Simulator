var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var CONST = require("../const");
var { verifyToken } = require("./verifyToken");

var kafka = require("../kafka/client");

router.get(
  "/getInvitations",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {}
);

router.get("/getRecommendations", function(req, res, next) {});

router.get("/removeConnection", function(req, res, next) {});

router.get("/ignoreInvitation", function(req, res, next) {});

router.get("/addConnection", function(req, res, next) {});

module.exports = router;
