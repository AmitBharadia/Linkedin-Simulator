var express = require("express");
var router = express.Router();

var kafka = require("../kafka/client");

router.post("/", function(req, res, next) {
  console.log(
    "============================In of the rest request signup ====================="
  );
  console.log("Request body:" + JSON.stringify(req.body));
  kafka.make_request("post_signup", "response_topic", req.body, function(
    err,
    results
  ) {
    console.log("in result");
    console.log("Result ", results, " Error:", err);
    if (err) {
      res.send({ status: "error", msg: err });
    } else {
      res.send({ status: "success", msg: "success", data: results });
    }
    console.log(
      "============================out of the rest request signup ====================="
    );
  });
});

module.exports = router;
