var express = require("express");
var router = express.Router();

var kafka = require("../kafka/client");

router.get("/", function (req, res, next) {
    console.log(
        "============================In of the rest request Get Edit Job Data ====================="
    );

    console.log("Request Body: " + req.query.id);
    //send body to kafka server

    kafka.make_request("get_edit_job", "response_topic", req.query.id, function (

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
            "============================out of the rest request Get Edit Job Data  ====================="
        );
    });
});


module.exports = router;
