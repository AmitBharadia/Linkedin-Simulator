var express = require("express");
var router = express.Router();

var kafka = require("../kafka/client");

router.post("/", function(req, res, next) {
  console.log(
    "============================In of the rest request signin ====================="
  );
  console.log("Request body:" + JSON.stringify(req.body));
  //send body to kafka server
  kafka.make_request(
    "post_signin",
    "response_signin",
    {
      username: req.body.username,
      password: req.body.password
    },
    function(err, results) {
      console.log("in result");
      console.log(results);

      if (err) {
        res.send({ status: "error", msg: "System Error, Try Again." });
      } else {
        res.send({
          status: results.status,
          msg: results.msg,
          token: results.token
        });
      }
      console.log(
        "============================out of the rest request signin ====================="
      );
    }
  );
});

module.exports = router;
