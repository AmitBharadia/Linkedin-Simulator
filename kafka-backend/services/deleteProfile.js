var bcrypt = require("bcryptjs");
var pool = require("../db/index.js");
var mysql = require("mysql");
var { User } = require("../models/User");
var mongoose = require("mongoose");
async function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend delete Profile====================="
  );
  console.log("Message body:" + JSON.stringify(msg));

  let queryString =
    "UPDATE user_cred SET " +
    " isDeleted='Yes'" +
    " WHERE" +
    " id =" +
    mysql.escape(msg.id);

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
          User.remove({ _id: mongoose.Types.ObjectId(msg.id) }, err => {
            if (err) {
              console.log("Error occured", err);
            } else {
              console.log("Record deleted successfully");
            }
          });
          callback(null, rows);
        }
        console.log(
          "============================Out of the kafka-backend delete profile====================="
        );
      });
    }
    con.release();
  });
}

exports.handle_request = handle_request;
