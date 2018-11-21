<<<<<<< HEAD
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
  recruiter_id: {
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
    type: String 
  },
  required_experience: {
    type: String
  },
  required_eductaion: {
      type: String
  }
});

module.exports = { Jobs };
=======
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Jobs = mongoose.model('jobs',{

    job_id: {
            type: String
        },
    recruiter_id: {
            type : String
    },
    company: {
        type : String
    },
    position:{
        type : String
    },
    location: {
        type : String
    },
    industry: {
        type : String
    },
    seniority: {
        type : String
    },
    description: {
        type : String
    },
    easyApply: {
        type : String
    },
    company_logo: {
        type : String
    },
    required_experience: {
        type : String
    }
});

module.exports = {Jobs};
>>>>>>> 3ffd606d2419e364931cd2abf52ada0af960fad9
