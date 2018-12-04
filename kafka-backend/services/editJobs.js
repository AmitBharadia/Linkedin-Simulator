var {Jobs} = require("../models/Jobs");

async function handle_request(msg, callback) {
    console.log(
        "=====================In the kafka-backend Edit Jobs====================="
    );
    console.log("Message body:" + JSON.stringify(msg));

    Jobs.findByIdAndUpdate(msg.job_id,
        {
            position: msg.position,
            location: msg.location,
            description: msg.description,
            easyApply: msg.easyApply,
            company: msg.company,
            industry : msg.industry,
            seniority : msg.seniority,
            required_experience : msg.required_experience
        }, (err, doc) => {
            console.log("In Create Job Query");
            if(doc!=null) {
                console.log("docs : ",doc);
                callback(null,doc)
            }
            else
            {
                console.log("Unable to insert data");
                callback("Unable to insert data", null);
            }
            console.log(
                "============================Out of the kafka-backend Edit Jobs====================="
            );


        });

}

exports.handle_request = handle_request;
