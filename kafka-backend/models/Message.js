const mongoose = require("mongoose");
var CONST = require("../const");
const Schema = mongoose.Schema;
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

var Message = mongoose.model("messages", {
  from_id: {
    type: String
  },
  from_name: {
    type: String
  },
  to_id: {},
  to_name: {
    type: String
  },
  desc: {
    type: String
  },
  post_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = { Message };
