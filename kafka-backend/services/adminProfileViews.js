var bcrypt = require("bcryptjs");
var pool = require("../db/index.js");
var mysql = require("mysql");
async function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend admin profile views====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  //msg.id = 1;

  let queryString =
  "SELECT " +
  " date_format(date, '%d-%b-%y') as x, COUNT(user_id) AS y " +
  " FROM " +
  " linkedin_master.profile_views " +
  " WHERE " +
  " user_id = " +
  mysql.escape(msg.id) +
  " GROUP BY (date) "+ 
  " LIMIT 30";
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
          "============================Out of the kafka-backend admin profile views====================="
        );
      }
    });
  }
  con.release();
});
}

exports.handle_request = handle_request;
