var express = require("express");
var router = express.Router();

const aws = require("aws-sdk");
var CONST = require("../const");

aws.config.update({
    secretAccessKey: CONST.awsS3Key,
    accessKeyId: CONST.awsS3Id,
    region: CONST.awsS3Region
});

var s3 = new aws.S3();

router.get("/", (req, res) => {

    console.log(
        "=====================In the rest-backend Get Resume====================="
    );
    console.log("Message body:" + req.query.id);

    let resumePath = req.query.id.split("/");
    console.log(resumePath);
    var key = resumePath[resumePath.length-1];

    console.log("Key :", key);
    var params = { Bucket: CONST.CompanyLogosBucket, Key: 'Confirmation_letter.pdf' };
    s3.getObject(params, function(err, data) {

        var base64img = new Buffer(data.Body).toString("base64");
        //console.log("Data :",base64img);
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        //res.write(data.Body, 'binary');
        //res.end(null, 'binary');
        res.end(base64img)
    });


    // let contentType = `image/${extension}`;
    // console.log("content type " + contentType);
    // var img = fs.readFileSync(fileLocation);
    // var base64img = new Buffer(img).toString("base64");
    // res.writeHead(200, { "Content-Type": contentType });
    //
    // res.end(base64img);
});

module.exports = router;
