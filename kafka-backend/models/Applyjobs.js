const mongoose = require("mongoose"), Schema = mongoose.Schema ;
var CONST = require("../const");
mongoose.Promise = global.Promise;

mongoose.connect(
  CONST.MONGO_URL,
  {
    useMongoClient: true
  },
  () => {  
    console.log( "=================== Mongo DB connected Status : "+ mongoose.connection.readyState+ "=======================");
  }
);


const educationSchema = new Schema({
  school: {    type: String  },
  degree: {    type: String  },
  field: {    type: String },
  grade: {    type: String  },
  fromYear: {    type: Date },
  toYear: {    type: Date }
});

const experienceSchema = new Schema({
  title: {    type: String  },
  company: {    type: String  },
  location: {    type: String },
  fromMonth: {    type: Date  },
  fromYear: {    type: Date },
  toYear: {    type: Date },
  toMonth:{    type: Date },
  description : {type: String}
});

var Applyjob = mongoose.model("appliedjobs", {

	experience : experienceSchema,
  	education : educationSchema,
  	job_id: {    type: String,  required: true},
	ApplyDate:{    type:Date ,    default: new Date()   },
	applicant_id: {     type: String },
 	recruiter_id: {   type: String },
 	resume: {   type: String   },
 	region: {     type: String },
	sponsorship :{     type:String  },
  	position: {     type: String	},
 	email: {   type: String   },
   	country :{     type:String },
   	gender: {    type: String  },
    address :{      type:String },
    lastName: {      type: String	},
  	firstName: {    type: String	},
    middleName :{      type:String,      default:""    },
    zipcode: {      type: String    },
    primaryPhone: {      type: String      },
    workPhone: {        type: String,        default:""        },
    disability :{        type:String	},
    veteran: {        type: String	}
});


module.exports = { Applyjob };