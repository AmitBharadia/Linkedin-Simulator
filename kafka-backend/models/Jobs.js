
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var Jobs = mongoose.model("jobs", {
  job_id: {
    type: String
  },
  recruiter_id: {
    type: String
  },
  company: {
    type: String
  },
  position: {
    type: String
  },
  location: {
    type: String
  },
  industry: {
    type: String
  },
  seniority: {
    type: String
  },
  description: {
    type: String
  },
  easyApply: {
    type: String
  },
  company_logo: {
    type: String
  },
  required_experience: {
    type: String
  }
});

module.exports = { Jobs };

