var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var passport = require("passport");
var bodyParser = require("body-parser");

//var cache = require('express-redis-cache')({ expire: 60 });

var CONST = require("./const");

var app = express();

//Allows request from other origin an access
app.use(cors({ origin: CONST.UI_SERVER_URL, credentials: true }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", CONST.UI_SERVER_URL);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

// Bring in defined Passport Strategy
require("./passport/index")(passport);

//set up middleware for authentication
var requireAuth = passport.authenticate("jwt", { session: false });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("property"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());

// var index = require('./routes/home');
// app.use('/home', index);

var signupRouter = require("./routes/signup");
app.use("/signup", signupRouter);

var signinRouter = require("./routes/signin");
app.use("/signin", signinRouter);

var getAllJobsRouter = require("./routes/getAllJobs");
app.use("/getAllJobs",  getAllJobsRouter);

var getPostedJobsRouter = require("./routes/getPostedJobs");
app.use("/myPostedJobs", getPostedJobsRouter);

var savejobRouter = require("./routes/savejob");
app.use("/save", requireAuth, savejobRouter);

var applyjobRouter = require("./routes/applyjob");
app.use("/apply", requireAuth, applyjobRouter);

var postJobsRouter = require("./routes/postJobs");
app.use("/postJob", postJobsRouter);

var jobsApplicationRouter = require("./routes/getApplications");
app.use("/myJobApplications", jobsApplicationRouter);

var getEditJobs = require("./routes/getEditJobs");
app.use("/getEditJobs", getEditJobs);

var editJobs = require("./routes/editJobs");
app.use("/editJobs", editJobs);

var dummyRouter = require("./routes/dummy");
app.use("/dummy", dummyRouter);

var searchPeopleRouter = require("./routes/searchPeople");

app.use("/search-people", searchPeopleRouter);

//app.use("/search-people", cache.route(), searchPeopleRouter);

var ProfileRouter = require("./routes/profile");
app.use("/profile", ProfileRouter);

var networkRouter = require("./routes/network");
app.use("/network", requireAuth, networkRouter);

var top5JobsRouter = require("./routes/top5Jobs");

// app.use("/top5jobs", cache.route(), top5JobsRouter);

// var top10JobsRouter = require("./routes/top10Jobs");
// app.use("/top10jobs", cache.route(), top10JobsRouter);

// var savedJobsRouter = require("./routes/savedJobs");
// app.use("/savedJobs", cache.route(), savedJobsRouter);

// var cityWiseJobsRouter = require("./routes/citywise");
// app.use("/cityWiseJobs", cache.route(), cityWiseJobsRouter);

// var clicksOnJobsRouter = require("./routes/clicks");
// app.use("/clicksOnJobs", cache.route(), clicksOnJobsRouter);

app.use("/top5jobs", top5JobsRouter);

var top10JobsRouter = require("./routes/top10Jobs");
app.use("/top10jobs", top10JobsRouter);

var savedJobsRouter = require("./routes/savedJobs");
app.use("/savedJobs", savedJobsRouter);

var cityWiseJobsRouter = require("./routes/citywise");
app.use("/cityWiseJobs", cityWiseJobsRouter);

var clicksOnJobsRouter = require("./routes/clicks");
app.use("/clicksOnJobs", clicksOnJobsRouter);

var deleteProfileRouter = require("./routes/deleteProfile");
app.use("/deleteProfile", deleteProfileRouter);

var chatListRouter = require("./routes/chatList");
app.use("/chatList", chatListRouter);

var messageDetailsRouter = require("./routes/messageDetails");
app.use("/messages", messageDetailsRouter);

var sendMessageRouter = require("./routes/sendMessage");
app.use("/sendMessage", sendMessageRouter);

var getBasicDetailsRouter = require("./routes/getBasicDetails");
app.use("/basic-details", getBasicDetailsRouter);

var AdminProfileViewsRouter = require("./routes/adminProfileViews");
app.use("/profileViews", AdminProfileViewsRouter);

var AdminJobsStartedRouter = require("./routes/adminJobsStarted");
app.use("/jobs_started", AdminJobsStartedRouter);

var AdminTrackUserRouter = require("./routes/adminTrackUser");
app.use("/track_user_info", AdminTrackUserRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
