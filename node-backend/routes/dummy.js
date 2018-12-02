var express = require("express");
var router = express.Router();
var { verifyToken } = require("./verifyToken");

router.get("/", async function(req, res, next) {
  console.log(
    "============================In of the rest request dummy ====================="
  );
  //console.log(req.headers.authorization);
  console.log("------------------");
  //console.log(req.get("Authorization"));
  console.log(
    "============================Out of the rest request dummy ====================="
  );

  // let verify= await verifyToken(req.get("Authorization"));
  //console.log(verify);
  //res.send({token:verify});
});

module.exports = router;
