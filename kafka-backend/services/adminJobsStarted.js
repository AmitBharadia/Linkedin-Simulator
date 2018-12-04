var bcrypt = require("bcryptjs");
var pool = require("../db/index.js");
var mysql = require("mysql");
async function handle_request(msg, callback) {
    console.log(
        "=====================In the kafka-backend admin jobs started ====================="
    );
    console.log("Message body:" + JSON.stringify(msg));
    //msg.id = 1;

    let date = new Date();
    let d = date.toISOString().split('T')[0];

    let queryString = "INSERT INTO " +
     " job_applications_started (recruiter_id,job_id,applicant_id,city,job_name, start_date )" +
     " VALUES ('" + msg.recruiter_id + "','" + msg.job_id + "','" + msg.applicant_id + "','" + msg.city + "','" + msg.position+ "','" + d + "');"
    console.log("mysqlquery :" + queryString);
    console.log(queryString);

    pool.getConnection((err, con) => {
        if (err) {
            console.log("Error occurred while creating a connection ", err);
            callback("Error occured", null);
        } else {
            con.query(queryString, (err, rows) => {
                if (err) {
                    console.log("Error occurred while executing query ", err);
                    callback("Error occured", null);
                } else {
                    console.log("result:" + JSON.stringify(rows));
                    if (rows.length > 0) {
                        console.log("Rows: " + JSON.stringify(rows));
                        callback(null, rows);
                    } else {
                        callback("No such user present", null);
                    }
                    console.log(
                        "============================Out of the kafka-backend admin jobs started====================="
                    );
                }
            });
        }
        con.release();
    });
}

exports.handle_request = handle_request;
