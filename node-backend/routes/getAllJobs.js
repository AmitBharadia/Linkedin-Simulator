var express = require("express");
var router = express.Router();
var kafka = require("../kafka/client");
var { verifyToken } = require("./verifyToken");
const redisClient = require("../Redis/redisCache");

let queryFilter = (input) => {

	let q = {};

	for (let key in input) {
		if (key === "jobid") {
			q["jobid"] = input[key]
		}
		else if (key === "seniority") {
			var array = JSON.parse(input[key]);
			let len = array.length;
			q["$or"] = [];
			for (let i = 0; i < len; i++) {
				q["$or"].push({ "seniority": { $regex: array[i], $options: "i" } });
			}
		}
		else
			q[key] = { $regex: input[key], $options: "i" };

	}
	return q;
}

router.get("/", async function (req, res, next) {

	let q = queryFilter(req.query);

	let verify = await verifyToken(req.get("Authorization"));

	// console.log(verify);

	if (verify.status == "error")
		res.send({ status: "error", msg: verify.msg });
	else {


		let m = { applicant_id: verify.msg, query: q };

		kafka.make_request("getAllJobs", "response_topic", m, function (err, result) {
			if (err) {
				res.send({ status: "error", msg: "System Error, Try Again." });
			} else {

				//console.log(result.msg);
				//console.log(q);

				res.send({
					status: result.status,
					msg: result.msg,
					savedjobs: result.savedjobs,
					appliedjobs: result.appliedjobs
				});
			}
			console.log("============================Out of the rest request get all job =====================");
		}
		);


	}

});




router.post("/view", async function (req, res, next) {
	console.log(
		"============================In the rest request insert new job view====================="
	);
	console.log(" Request body ", JSON.stringify(req.body))
	kafka.make_request(
		"jobview",
		"response_topic",
		req.body,
		function (err, result) {
			if (err) {
				res.send({ status: "error", msg: "System Error, Try Again." });
			} else {
				console.log(result.msg);
				res.send({
					status: result.status,
					msg: result.msg,
				});
			}
			console.log(
				"============================Ou of the rest request insert new job view====================="
			);

		}
	);
	// }
});

module.exports = router;
