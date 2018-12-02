var {Jobs} = require("../models/Jobs");

async function handle_request(msg, callback) {
    console.log(
        "=====================In the kafka-backend Get Posted Jobs====================="
    );
    console.log("Message body:" + JSON.stringify(msg));

    Jobs.find({recruiter_id : msg}, (err, doc) => {
            console.log("In Get Posted Jobs Query");
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
                "============================Out of the kafka-backend Get Posted Jobs====================="
            );
        });
  

}

exports.handle_request = handle_request;
