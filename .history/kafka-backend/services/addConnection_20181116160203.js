var { Applicant } = require("../models/Applicant");
var { Recruiter } = require("../models/Recruiter");

function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend Add Connection request====================="
  );
  console.log("Message body:" + JSON.stringify(msg));
  //   Network.find({}, (err, users) => {
  //     if (err) {
  //       console.log("Error occured while user sign up");
  //       callback(err, "Error occured");
  //     } else if (users) {
  //       console.log("Users found: ", users);
  //       callback(null, users);
  //     }
  Profile.findOne({ user: req.user.id }).then(profile => {
    Post.findById(req.params.id)
      .then(post => {
        if (
          post.likes.filter(like => like.user.toString() === req.user.id)
            .length > 0
        ) {
          return res
            .status(400)
            .json({ alreadyliked: "User already liked this post" });
        }

        // Add user id to likes array
        post.likes.unshift({ user: req.user.id });

        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
  });
  console.log(
    "======================Out of the kafka-backend Search People====================="
  );
}

exports.handle_request = handle_request;
