var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var CONST = require("../const");
var kafka = require("../kafka/client");

router.get("/", function(req, res, next) {
    console.log(
        "============================In of the rest request GetJobsApplications ====================="
    );

    console.log("Request Body: " + req.query.id);
    //send body to kafka server
    kafka.make_request("job_application", "response_topic", req.query.id, function(
        err,
        doc
    ) {
        console.log("in result");
        console.log("Result ", doc, " Error:", err);
        if (!err && !doc) {
            res.send({
                status: "error",
                msg: "Error occured"
            });
        } else if (err) {
            res.send({ status: "error", msg: err });
        } else {
            res.send({
                status: "success",
                msg: doc
            });
        }
        console.log(
            "============================out of the rest request GetJobsApplications ====================="
        );
    });
});
//
// router.get("/getpic", function(req, res, next) {
//     console.log(
//         "============================In of the rest request Get S3URL ====================="
//     );
//
//     const aws = require("aws-sdk");
//
//     aws.config.update({
//         secretAccessKey: CONST.awsS3Key,
//         accessKeyId: CONST.awsS3Id,
//         region: CONST.awsS3Region
//     });
//
//     var s3 = new aws.S3();
//
//     var params = { Bucket: CONST.ResumesBucket, Key: "testimonials-2.jpg" };
//     var url = s3.getSignedUrl("getObject", params);
//     console.log("The URL is : ", url);
//
//     console.log(
//         "============================Out of the rest request Get S3URL ====================="
//     );
// });

module.exports = router;
