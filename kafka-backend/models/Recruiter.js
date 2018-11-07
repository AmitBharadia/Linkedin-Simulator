const mongoose = require("mongoose");
var CONST = require("../const");
mongoose.Promise = global.Promise;
mongoose.connect(
  CONST.MONGO_URL,
  { useNewUrlParser: true }
);

var Recruiter = mongoose.model("user", {
  email_address: {
    type: String
  },
  password: {
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
