var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");
var { upload } = require("../s3");
var { verifyToken } = require("./verifyToken");
router.get("/", async function (req, res, next) {
  kafka.make_request(
    "getapplyjob",
    "response_topic",
    req.query,
    function (err, result) {

      if (err) {
        res.send({ status: "error", msg: "System Error, Try Again." });
      } else {
        console.log(result.msg);
        res.send({ status: result.status, msg: result.msg });
      }
    });

});

router.post("/", upload.single("resume"), async function (req, res, next) {
  console.log(
    "============================In of the rest request apply job ====================="
  );
  // console.log("Request body:", JSON.stringify(req.body));
  console.log("Request file:", JSON.stringify(req.body.filename));

  let resumeLink = "";
  if (req.file) {
    var url =
      "https://s3.amazonaws.com/linkedin-273/CompanyLogo/" + req.body.filename;
    console.log("The URL is : ", url);
    resumeLink = url;
  }

  data = JSON.parse(req.body.data);
  console.log("request body : ", data);
  kafka.make_request(
    "applyjob",
    "response_topic",
    { details: data, resumeLink: resumeLink },
    function (err, result) {
      if (err) {
        res.send({ status: "error", msg: "System Error, Try Again." });
      } else {
        console.log(result.msg);
        res.send({ status: result.status, msg: result.msg });
      }
      console.log(
        "============================Out of the rest request apply job ====================="
      );
    }
  );
});

module.exports = router;
