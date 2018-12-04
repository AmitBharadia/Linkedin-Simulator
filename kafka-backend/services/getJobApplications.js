var {Applyjob} = require("../models/Applyjobs");

async function handle_request(msg, callback) {
    console.log(
        "=====================In the kafka-backend Get Job Applications====================="
    );
    console.log("Message body:" + JSON.stringify(msg));

    Applyjob.find({job_id : msg}, (err, doc) => {
        console.log("In Get Job Applications Query");
        if(doc!=null) {
            console.log("docs : ",doc);
            callback(null,doc)
        }
        else
        {
            console.log("Unable to fetch data");
            callback("Unable to fetch data", null);
        }
        console.log(
            "============================Out of the kafka-backend Get Job Applications====================="
        );
    });


}

exports.handle_request = handle_request;
