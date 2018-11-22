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

var Connection = mongoose.model("connections", {
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  connect_user_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  connect_first_name: {
    type: String
  },
  connect_last_name: {
    type: String
  },
  connect_summary: {
    type: String
  },
  connect_photo: {
    type: String
  }
});

module.exports = { Connection };
