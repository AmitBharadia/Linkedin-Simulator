var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var CONST = require("../const");

var kafka = require("../kafka/client");

router.post("/", function(req, res, next) {
    console.log(
        "============================In of the rest request postJob ====================="
    );
    console.log("Request body:" + JSON.stringify(req.body));
    //send body to kafka server
    /*kafka.make_request(
        "post_job","post_job",req.body,
        function(err, doc) {
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
                    status : "success",
                    msg : doc
                })
            }
            console.log(
                "============================out of the rest request postJob ====================="
            );
        }
    );*/
});

module.exports = router;
