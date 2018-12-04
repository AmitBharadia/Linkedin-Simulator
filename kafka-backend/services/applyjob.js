var { Applyjob } = require("../models/Applyjobs");
var pool = require("../db/index.js");

async function handle_request(msg, callback) {
    console.log(
        "=====================In the kafka-backend apply job====================="
    );
    console.log("In handle request:" + JSON.stringify(msg.region));

    let experience = {
        title: msg.details.experienceTitle,
        company: msg.details.experienceCompany,
        location: msg.details.experienceLocation,
        fromMonth: msg.details.fromMonth,
        fromYear: msg.details.fromYear,
        toYear: msg.details.toYear,
        toMonth: msg.details.toMonth,
        description: msg.details.experienceDescription
    };

    let education = {
        school: msg.details.educationSchool,
        degree: msg.details.educationDegree,
        field: msg.details.educationFieldofStudy,
        fromYear: msg.details.educationGrade,
        toYear: msg.details.EduFromYear,
        grade: msg.details.EdutoYear
    }

    let newjob = new Applyjob({
        "applicant_id": msg.details.applicant_id,
        job_id: msg.details.job_id, recruiter_id: msg.details.recruiter_id, location: msg.details.location, company: msg.details.company, position: msg.details.position,
        region: msg.details.region, gender: msg.details.gender, experience: experience, education: education,
        email: msg.details.email, workAuthorization: msg.details.workAuthorization, middleName: msg.details.middleName,
        firstName: msg.details.firstName, lastName: msg.details.lastName, address: msg.details.address, country: msg.details.country,
        zipcode: msg.details.zipcode, primaryPhone: msg.details.primaryPhone, workPhone: msg.details.workPhone,
        disability: msg.details.disability, veteran: msg.details.veteran, sponsorship: msg.details.sponsorship, resume: msg.resumeLink
    });


    try {
        let x = await newjob.save();

        let date = new Date();
        let d = date.toISOString().split('T')[0];
        //console.log(d);
        let mysqlquery = "INSERT INTO job_application_submitted (applicant_id, job_id,recruiter_id,city,job_name,applied_date) VALUES ('" + msg.details.applicant_id + "','" + msg.details.job_id + "','" + msg.details.recruiter_id + "','" + msg.details.region + "','" + msg.details.position + "','" + d + "');"
        // save the stats in mysql
        console.log("mysqlquery :", mysqlquery);
        execute_query_with_ID(mysqlquery).then(function (rows) {
            //console.log(rows);
            if (rows.insertId) {

                console.log("saved in mysql");

            }
        })
            .catch((err) => setImmediate(() => {
                console.log("error " + err);
            }));

        callback(null, { status: "success", msg: x });
        console.log(
            "=====================Out of  the kafka-backend apply job====================="
        );

    } catch (error) {
        callback(null, { status: "error", msg: error });
        console.log(
            "=====================Out of  the kafka-backend apply job====================="
        );
    }
}

//to insert into database
function execute_query_with_ID(query) {
    return new Promise(function (resolve, reject) {

        pool.getConnection(function (err, connection) {
            if (err)
                reject(err);
            else {
                connection.query(query, function (err, result) {
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



