var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  console.log(
    "============================In of the rest request dummy ====================="
  );
  console.log(req.get("Authorization"));
  console.log(
    "============================Out of the rest request dummy ====================="
  );
  res.end();
});

module.exports = router;
