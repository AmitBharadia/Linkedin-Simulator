var mysql = require("mysql");
var bcrypt = require("bcryptjs");
var pool = require("../db/index.js");

async function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Sigin====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  
  let user = msg;
  let queryString =
    "select * from user_cred where username= " +
    mysql.escape(user.username) +
    " AND isDeleted='No'";

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
          if (rows[0] && rows[0].id) {
            console.log("ID: " + rows[0]);
            console.log("expected password: " + rows[0].password);
            console.log("actual password: " + user.password);
            if (bcrypt.compareSync(user.password, rows[0].password)) {
              console.log("password matched");
              callback(null, rows[0]);
            } else {
              console.log("password did not match");
              callback("Password did not match", null);
            }
          } else {
            callback("No such user present", null);
          }
          console.log(
            "============================Out of the kafka-backend Signin====================="
          );
          }
      });
    }
    console.log("Before :" + pool._freeConnections.length);
    con.release();
    console.log("After : " + pool._freeConnections.length);
  });
}

exports.handle_request = handle_request;
