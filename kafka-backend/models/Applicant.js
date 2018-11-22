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
      "=================== Mongo DB connected applicant Status : ",
      mongoose.connection.readyState,
      "======================="
    );
  }
);

var Applicant = mongoose.model("applicants", {
  username: {
    type: String,
    //required:true,
    //unique:true
  },
  first_name: {
    type: String,
    default:''
  },
  last_name: {
    type: String,
    default:''
  }
});

module.exports = { Applicant };
