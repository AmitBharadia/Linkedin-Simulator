"use strict";
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var CONST = require("../const");
var mysql = require("mysql");
var pool = require("../db/index.js");

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {
  var req = ExtractJwt.fromAuthHeaderWithScheme("Bearer");
  var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
    secretOrKey: CONST.SECRET
  };

  //console.log("Inside passport", JSON.stringify(opts));
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, callback) {
      console.log("=======================Authenticating====================");
      console.log("payload: ", JSON.stringify(jwt_payload));

      let queryString =
        "select * from user_cred where id= " + mysql.escape(jwt_payload.id);
      console.log(queryString);
      pool.getConnection((err, con) => {
        if (err) {
          console.log("Error occurred while creating a connection ", err);
          callback(err, "Error occured");
        } else {
          con.query(queryString, (err, rows) => {
            if (err) {
              console.log("Error occurred while executing query ", err);
              console.log(
                "============================Authenntication Error====================="
              );
              console.log("Before :" + pool._freeConnections.length);
              con.release();
              console.log("After : " + pool._freeConnections.length);
              callback("Error occured while executing query ", err);
            } else {
              console.log("result:" + JSON.stringify(rows));
              if (rows[0] && rows[0].id) {
                console.log(
                  "============================Authenntication successfull====================="
                );
                console.log("Before :" + pool._freeConnections.length);
                con.release();
                console.log("After : " + pool._freeConnections.length);
                callback(null, rows[0]);
              } else {
                console.log("Error occured while validating token ", err);
                console.log(
                  "============================Authenntication Error====================="
                );
                console.log("Before :" + pool._freeConnections.length);
                con.release();
                console.log("After : " + pool._freeConnections.length);
                callback("Error occured while vaildating token ", err);
              }
            }
          });


        }
      });
    })
  );
};
