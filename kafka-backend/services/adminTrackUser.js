var bcrypt = require("bcryptjs");
var pool = require("../db/index.js");
var mysql = require("mysql");
async function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get track user details====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  //msg.id = 1;
  //   let queryString =
  //     "select * from job_application_submitted where recruiter_id= " +
  //     mysql.escape(1);
  let queryString =
    "select c.recruiter_id,c.job_id,su.job_name,count(distinct c.applicant_id) as clicked, count(distinct su.applicant_id) as submitted, " +
    " count(distinct st.applicant_id) as started " +
    " from linkedin_master.job_applications_clicked as c  "+ 
    " left join linkedin_master.job_application_submitted as su on su.job_id = c.job_id " +
    " left join linkedin_master.job_applications_started as st on st.job_id = c.job_id " +
    " WHERE " +
    " c.recruiter_id = " +
    mysql.escape(msg.id) +
    " GROUP BY (c.job_id)";

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
            "============================Out of the kafka-backend track user details====================="
          );
        }
      });
    }
    con.release();
  });

  console.log("After wait......");
}

exports.handle_request = handle_request;
