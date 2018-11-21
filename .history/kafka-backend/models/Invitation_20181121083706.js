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

var Invitation = mongoose.model("invitations", {
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  request_user_id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  request_first_name: {
    type: String
  },
  request_last_name: {
    type: String
  },
  request_summary: {
    type: String
  },
  request_photo: {
    type: String
  }
});

module.exports = { Invitation };
