var pool = require("../db/index.js");

async function handle_request(msg, callback){
    console.log(
        "=====================In the kafka-backend admin insert job view====================="
      );
    console.log("In handle request:"+ JSON.stringify(msg));    
   
    var date = new Date();
    let d=date.toISOString().split('T')[0];
    let mysqlquery="INSERT INTO job_applications_clicked (recruiter_id, applicant_id, job_id , date_clicked , city,job_name ) VALUES ('"+msg.recruiter_id+"','"+msg.applicant_id+"','"+msg._id+"','"+d+"','"+msg.location+"','"+msg.position+"');"

    // save the stats in mysql
    execute_query_with_ID(mysqlquery).then(function(rows) {
        console.log(rows);
        if(rows.insertId){    

        console.log("saved in mysql");           
                    
           callback(null , { status:"success",msg:"saved"  });
           console.log(
            "=====================Out of the kafka-backend admin insert job view====================="
          );
        }      
        })
      .catch((err) => setImmediate(() => { 
        console.log("error "+err);
        callback(null , { status:"error",msg:"not saved"  });
        console.log(
            "=====================Out of the the kafka-backend admin insert job view====================="
          );
      }));
      
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


 
