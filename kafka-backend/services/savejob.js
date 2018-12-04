var { Savedjobs } = require("../models/Savedjobs");
var pool = require("../db/index.js");

async function handle_request(msg, callback) {
    console.log(
        "=====================In the kafka-backend save a job====================="
    );
    console.log("In handle request:" + JSON.stringify(msg));

    let newjob = new Savedjobs({
        "job_id": msg.job_id, "applicant_id": msg.applicant_id, "location": msg.location, "position": msg.position,
        "company": msg.company, "recruiter_id": msg.recruiter_id
    });

    try {
        let x = await newjob.save();

        var date = new Date();
        let d = date.toISOString().split('T')[0];
        let mysqlquery = "INSERT INTO saved_jobs (recruiter_id, applicant_id, job_id , Date, job_name ) VALUES ('" + msg.recruiter_id + "','" + msg.applicant_id + "','" + msg.job_id + "','" + d + "','" + msg.position + "');"
        // save the stats in mysql
        execute_query_with_ID(mysqlquery).then(function (rows) {
            console.log(rows);
            if (rows.insertId) {
                console.log("saved in mysql");
            }
        })
            .catch((err) => setImmediate(() => {
                console.log("error " + err);
            }));

        callback(null, { status: "success", msg: x });
        console.log(
            "=====================In the kafka-backend save a job====================="
        );

    } catch (error) {
        console.log(JSON.stringify(error));
        callback({ status: "error", msg: error }, null);
        console.log(
            "=====================In the kafka-backend save a job====================="
        );

    }

}


//to insert into database
function execute_query_with_ID(query) {
    return new Promise(function (resolve, reject) {

        pool.getConnection(function (err, connection) {
            if (err)
                reject(err);
            else {
                connection.query(query, function (err, result) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                });
                connection.release();

            }

        });

    });
}

exports.handle_request = handle_request;