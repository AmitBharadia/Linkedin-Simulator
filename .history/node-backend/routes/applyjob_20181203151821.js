var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");
var { upload } = require("../s3");
var { verifyToken } = require("./verifyToken");

router.post("/", upload.single("file"), async function (req, res, next) {
  console.log(
    "============================In of the rest request apply job ====================="
  );
  // console.log("Request body:", JSON.stringify(req.body));
  console.log("Request file:", JSON.stringify(req.file));

  // console.log(req.headers.authorization);
  // let verify= await verifyToken(req.get("Authorization"));
  // console.log(verify);   
  // if(verify.status == "error")
  //     res.send( { status:"error" , msg: verify.msg });
  // else{
  let resumeLink = "";
  if (req.file) {
    var url = req.file.location;
    console.log("The URL is : ", url);
    resumeLink = url;
  }

  kafka.make_request(
    "applyjob",
    "response_topic",
    { details: req.body, resumeLink: resumeLink },
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
    });

  //}

});


module.exports = router;
