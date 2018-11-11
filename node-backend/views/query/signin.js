var mysql = require("mysql");
var pool = require("../../db");

var createUser = (user, callback) => {
  console.log("User details:" + JSON.stringify(user));
  var queryString = getQuery(user);
  console.log("Query:" + queryString);

  pool.getConnection((err, con) => {
    if (err) {
      console.log("Error occurred while creating a connection ", err);
      return callback(err, "Error occured");
    } else {
      con.query(queryString, (err, rows) => {
        if (err) {
          console.log("Error occurred while executing query ", err);
          return callback(err, "Error occured");
        } else {
          console.log("Rows", JSON.stringify(rows));
          return callback(null, rows);
        }
      });
    }
  });
};

var getQuery = user => {
  let queryString =
    "Insert into user(first_name,last_name,email_address,password,type) values ( " +
    mysql.escape(user.firstName) +
    " , " +
    mysql.escape(user.lastName) +
    " , " +
    mysql.escape(user.emailAddress) +
    " , " +
    mysql.escape(user.password) +
    " , " +
    mysql.escape(user.type) +
    ")";
};

exports.module = { createUser };
