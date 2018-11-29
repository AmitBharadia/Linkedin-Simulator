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

var Savedjobs = mongoose.model("savedjobs", {
  job_id: {
    type: String,
    required: true
  },
  applicant_id: {
      type: String
  },
  recruiter_id:{
    type: String
  },
  position:{
   type:String 
  },
  company:{
    type:String
  },
  location:{
    type: String
  },
  savedDate:{ type:Date ,  default: new Date() }

  
});

module.exports = { Savedjobs };
