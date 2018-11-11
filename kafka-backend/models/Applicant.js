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

var Applicant = mongoose.model("applicants", {
  username: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
});

module.exports = { Applicant };
