var mysql = require("mysql");
var CONST = require("../const");

var pool = mysql.createPool({
  connectionLimit: CONST.CONNECTION_LIMIT,
  host: CONST.HOST,
  user: CONST.USER,
  password: CONST.PASSWORD,
  database: CONST.DATABASE
});

module.exports = pool;
