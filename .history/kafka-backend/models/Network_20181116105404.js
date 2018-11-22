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

var Network = mongoose.model("networks", {
  user: {
    type: Schema.Types.ObjectId,
    ref: "applicants"
  },

  connections: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "applicants"
      },
      first_name: {
        type: String
      },
      last_name: {
        type: String
      },
      summary: {
        type: String
      },
      photo: {
        type: String
      }
    }
  ],
  invitations: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "applicants"
      },
      first_name: {
        type: String
      },
      last_name: {
        type: String
      },
      summary: {
        type: String
      },
      photo: {
        type: String
      }
    }
  ],
  recommendations: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "applicants"
      },
      first_name: {
        type: String
      },
      last_name: {
        type: String
      },
      summary: {
        type: String
      },
      photo: {
        type: String
      }
    }
  ]
});

module.exports = { Network };
