const mongoose = require("mongoose");
var CONST = require("../const");
const Schema=mongoose.Schema;
mongoose.Promise = global.Promise;

mongoose.connect(
  CONST.MONGO_URL,
  {
    useMongoClient: true
  },
  () => {
    console.log(
      "=================== Mongo DB connected for Profile Status : ",
      mongoose.connection.readyState,
      "======================="
    );
  }
);

var Profile=new Schema({
    
    // user:{
    //     type:Schema.Types.ObjectId,
    //     ref:'applicants'
    // },

    first_name:{
        type:String
    },
    user_id:{
        type:String
    },
    last_name:{
        type:String
    },
    profileHeadline:{
        type:String
    },
    profileEducation:{
        type:String
    },
    Zipcode:{
        type:Number
    },
    profileLocation:{
        type:String
    },
    profileIndustry:{
        type:String
    },
    profileContact:{
        typee:String
    },
    profileSummary:{
        type:String
    },
    countryName:{
        type:String
    },
    experience:[
        {
            experienceTitle:{
                type:String
            },
            experienceCompany:{
                type:String
            },
            experienceLocation:{
                type:String
            },
            experienceHeadline:{
                type:String
            },
            experienceDescription:{
                type:String
            },
            ExpFromMonth:{
                type:Number
            },
            ExpFromYear:{
                type:Number
            },
            ExpToMonth:{
                type:Number
            },
            ExpToYear:{
                type:Number
            },
            
        }
    ],
    education:[
        {
            educationSchool:{
                type:String
            },
            educationDegree:{
                type:String
            },
            educationFieldofStudy:{
                type:String
            },
            educationGrade:{
                type:String
            },
            educationActivities:{
                type:String
            },
            educationDescription:{
                type:String
            },
            EduFromYear:{
                type:Number
            },
            EduToYear:{
                type:Number
            }
            

        }
    ]
});

module.exports=Profile=mongoose.model('profiles',Profile);
