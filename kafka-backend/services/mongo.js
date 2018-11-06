var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = "mongodb://localhost:27017/homeaway"
//var url = "mongodb://username123:password123@ds149252.mlab.com:49252/homeaway"

// This is a global variable we'll use for handing the MongoDB client
var connection=[];
// Create the database connection
establishConnection = function(callback){
      if(connection.length===0){
              //  console.log("first")
               //MongoClient.connect(url,{ poolSize: 10 },function(err, db) {
                MongoClient.connect(url,function(err, db) {
                    assert.equal(null, err);            
                        connection = db
                        if(typeof callback === 'function' && callback)
                            callback(connection)
                    })
            }                  
} 
function getconnection(){
    return connection
}
module.exports = {
    establishConnection:establishConnection,
    getconnection:getconnection
}