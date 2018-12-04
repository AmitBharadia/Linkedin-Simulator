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

var User = mongoose.model("users", {
  username: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }, profile_url: {
    type: String
  },
  type: {
    type: String,
    enum: ["applicant", "recruiter"]
  },
  profileHeadline: {
    type: String
  },
  profileEducation: {
    type: String
  },
  Zipcode: {
    type: String
  },
  profileLocation: {
    type: String
  },
  profileIndustry: {
    type: String
  },
  profileContact: {
    typee: String
  },
  profileSummary: {
    type: String
  },
  countryName: {
    type: String
  },
  experience: [
    {
      experienceTitle: {
        type: String
      },
      experienceCompany: {
        type: String
      },
      experienceLocation: {
        type: String
      },
      experienceHeadline: {
        type: String
      },
      experienceDescription: {
        type: String
      },
      ExpFromMonth: {
        type: Number
      },
      ExpFromYear: {
        type: Number
      },
      ExpToMonth: {
        type: Number
      },
      ExpToYear: {
        type: Number
      }
    }
  ],
  education: [
    {
      educationSchool: {
        type: String
      },
      educationDegree: {
        type: String
      },
      educationFieldofStudy: {
        type: String
      },
      educationGrade: {
        type: String
      },
      educationActivities: {
        type: String
      },
      educationDescription: {
        type: String
      },
      EduFromYear: {
        type: Number
      },
      EduToYear: {
        type: Number
      }
    }
  ]
});

module.exports = { User };
