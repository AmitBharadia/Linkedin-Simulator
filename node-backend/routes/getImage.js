var express = require("express");
var router = express.Router();

const path = require("path");
const fs = require("fs");

router.post("/", (req, res) => {
  let profilePic = req.body.path;
  //console.log("file path"+req.body.path);
  var fileLocation = path.join(__dirname + profilePic);
  fileLocation = fileLocation.replace("routes", "");
  //console.log("final file location"+fileLocation);

  let extension = profilePic.split(".").pop();
  let contentType = `image/${extension}`;
  console.log("content type " + contentType);
  var img = fs.readFileSync(fileLocation);
  var base64img = new Buffer(img).toString("base64");
  res.writeHead(200, { "Content-Type": contentType });

  res.end(base64img);
});

module.exports = router;
