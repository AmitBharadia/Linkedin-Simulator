const mongoose = require("mongoose");
var CONST = require("../const");
mongoose.Promise = global.Promise;

mongoose.connect(
  CONST.MONGO_URL,
  {
    useMongoClient: true
  },
  () => {
    console.log(
      "=================== Mongo DB connected Status : ",
      mongoose.connection.readyState,
      "======================="
    );
  }
);

var Applyjob = mongoose.model("appliedjobs", {
  job_id: {
    type: String,
    required: true
  },
  ApplyDate:{ type:Date ,  default: new Date()},
  applicant_id: {
      type: String
  },
  resume: {
    type: String
    }
});

module.exports = { Applyjob };
