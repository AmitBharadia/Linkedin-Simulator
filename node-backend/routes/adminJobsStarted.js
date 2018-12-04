var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");

router.post("/", async function (req, res, next) {
    console.log(
        "============================In of the rest request admin jobs started ====================="
    );
    console.log("Request body:" + JSON.stringify(req.body));
    kafka.make_request("jobsStarted", "response_topic", req.body, function (
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
            "============================Out of the rest request admin jobs started ====================="
        );
    });
});

module.exports = router;
