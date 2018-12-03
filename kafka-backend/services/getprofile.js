var { User } = require("../models/User");
var mongoose = require("mongoose");
var pool = require("../db/index.js");

async function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend get Profile====================="
  );
   
  User.findOne({ _id: mongoose.Types.ObjectId(msg.id) }, (err,exiprofile)=>{
    if(err){
      console.log("Error occured");
      callback("Error occured",null)
      console.log(
        "=====================out of the kafka-backend get Profile====================="
      );
    }
    if (exiprofile) {
      if(msg.id !== msg.viewer_id){
       
      let date = new Date();
      let d=date.toISOString().split('T')[0];
      //console.log(d);
      let mysqlquery="INSERT INTO profile_views (user_id, viewer_id, Date ) VALUES ('"+msg.id+"','"+msg.viewer_id+"','"+d+"');"
      console.log("mysqlquery :" + mysqlquery);
      // save the stats in mysql
    execute_query_with_ID(mysqlquery).then(function(rows) {
        console.log(rows);
        if(rows.insertId){    

        //console.log("saved in mysql");           
                          
    }             
        })
      .catch((err) => setImmediate(() => { 
        console.log("error "+err);
      }));
    }

      console.log("Success");
      callback(null, exiprofile);
      console.log(
        "=====================Out of the kafka-backend get Profile====================="
      );
    } else {
      console.log("Profile not found");
      callback("Profile not found",null)
      console.log(
        "=====================Out of the kafka-backend get Profile====================="
      );
    }
  } )
}

//to insert into database
function execute_query_with_ID(query){
  return new Promise(function(resolve, reject) {

      pool.getConnection( function(err,connection) {
          if(err)
              reject(err);
          else{
               connection.query(query, function (err,result) {
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
