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

var Jobs = mongoose.model("jobs", {
  job_id: {
    type: String,
  //  required: true
  },
  position: {
    type: String
  },
  posted: { type: Date, default: Date.now },
  Title:{ type:String }, 
  location: {
    type: String
  },
  Recruiter_id: {
      type: String,
     // required: true
  },
  description: {
    type: String
  },
  job_function: {
    type: String
  },
  company: {
    type: String
  },
  company_logo: {
    type: String
  },
  No_of_views:{
    type: Number
  },
  No_of_Applicants:{
    type: Number
  },
  employment_type: {
    type: String
  },
  industry: {
    type: String
  },
  required_skills: {
      type: String
  },
  easyApply: {
    type: Boolean 
  },
  required_experience: {
    type: String
  },
  required_eductaion: {
      type: String
  }
});

module.exports = { Jobs };
