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
      "=================== Mongo DB connected Recruiter Status : ",
      mongoose.connection.readyState,
      "======================="
    );
  }
);

var Recruiter = mongoose.model("recruiter", {
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

module.exports = { Recruiter };
