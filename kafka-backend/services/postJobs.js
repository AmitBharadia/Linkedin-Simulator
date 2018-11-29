var {Jobs} = require("../models/Jobs");

async function handle_request(msg, callback) {
    console.log(
        "=====================In the kafka-backend Post Jobs====================="
    );
    console.log("Message body:" + JSON.stringify(msg));

    Jobs.create(
        {
            recruiter_id: msg.recruiter_id,
            position: msg.position,
            location: msg.location,
            description: msg.description,
            easyApply: msg.easyApply,
            company: msg.company,
            company_logo : msg.company_logo,
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
                    "============================Out of the kafka-backend Post Jobs====================="
                );
            

        });
   
}

exports.handle_request = handle_request;
