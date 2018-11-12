const mongoose = require("mongoose");
var CONST = require("../const");
mongoose.Promise = global.Promise;
// mongoose.connect(
//   CONST.MONGO_URL,
//   { useNewUrlParser: true }
// );

mongoose.connect(
  CONST.MONGO_URL,
  {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
  }
);
console.log(mongoose.connection.readyState);

var Applicant = mongoose.model("Applicant", {
  username: {
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

module.exports = { Applicant };
