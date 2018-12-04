var connection = new require("./kafka/Connection");
//topics files
var signin = require("./services/signin");
var signup = require("./services/signup");
var getAllJobs = require("./services/getAllJobs");
var getsavedjobs = require("./services/getsavedjobs");
var applyjob = require("./services/applyjob");
var savejob = require("./services/savejob");

var getInvitations = require("./services/getInvitations");
var getRecommendations = require("./services/getRecommendations");
var removeConnection = require("./services/removeConnection");
var ignoreInvitation = require("./services/ignoreInvitation");
var addConnection = require("./services/addConnection");
var acceptConnection = require("./services/acceptConnection");
var getConnectionCount = require("./services/getConnectionCount");
var searchPeople = require("./services/searchPeople");
var profile = require("./services/profile");
var getprofile = require("./services/getprofile");
var top5Jobs = require("./services/top5Jobs");
var cityApp = require("./services/citywiseApp");
var top10Jobs = require("./services/top10jobs");
var clicksOnJobs = require("./services/clicksOnJob");
var savedJobs = require("./services/savedJobs");
var postJobs = require("./services/postJobs");
var editJobs = require("./services/editJobs");


var postedJobs = require("./services/postedJobs");
var deleteProfile = require("./services/deleteProfile");
var getAllConnection = require("./services/getAllConnection");
var getChatList= require("./services/getChatList");
var getMessageDetails = require("./services/getMessageDetails");
var sendMessage=require("./services/sendMessage");
var getBasicDetails=require("./services/getBasicDetails");


var getJobApplications=require("./services/getJobApplications");


var getapplyjob=require("./services/getapplyjob");

var jobview = require("./services/jobview");

var profileviews = require("./services/adminProfileViews");
var adminJobsStarted = require("./services/adminJobsStarted");
var adminTrackUser = require("./services/adminTrackUser");
function handleTopicRequest(topic_name, fname) {
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  //console.log("server is running ");
  consumer.on("message", function(message) {
    console.log("MESSAGE  received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function(err, res) {
      //console.log("Result :" + JSON.stringify(res) + " Error : " + err);
      var payloads = [
        {
          topic: data.replyTo,
          messages: JSON.stringify({
            correlationId: data.correlationId,
            data: res,
            err: err
          }),
          partition: 0
        }
      ];
     console.log("Payload:", JSON.stringify(payloads));
      producer.send(payloads, function(err, data) {});
      return;
    });
  });
}

// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("post_signin", signin);
handleTopicRequest("post_signup", signup);

handleTopicRequest("getapplyjob",getapplyjob );
handleTopicRequest("post_invitations", getInvitations);
handleTopicRequest("get_recommendations", getRecommendations);
handleTopicRequest("remove_connection", removeConnection);
handleTopicRequest("ignore_Invitation", ignoreInvitation);
handleTopicRequest("add_connection", addConnection);
handleTopicRequest("accept_connection", acceptConnection);
handleTopicRequest("getsavedjobs", getsavedjobs);
handleTopicRequest("get_top5Jobs", top5Jobs);
handleTopicRequest("get_cityWise", cityApp);
handleTopicRequest("get_top10Jobs", top10Jobs);
handleTopicRequest("get_clicks", clicksOnJobs);
handleTopicRequest("admin_getsavedjobs", savedJobs);
handleTopicRequest("posted_job", postedJobs);
handleTopicRequest("post_delete", deleteProfile);



handleTopicRequest("get_connection_count", getConnectionCount);
handleTopicRequest("get_all_connections", getAllConnection);
handleTopicRequest("getAllJobs", getAllJobs);
handleTopicRequest("savejob", savejob);
handleTopicRequest("applyjob", applyjob);
handleTopicRequest("get_people", searchPeople);
handleTopicRequest("profile", profile);
handleTopicRequest("getprofile", getprofile);
handleTopicRequest("post_job", postJobs);
handleTopicRequest("edit_job", editJobs);
handleTopicRequest("posted_job", postedJobs);


handleTopicRequest("getChatList",getChatList);
handleTopicRequest("getMessageDetails",getMessageDetails);
handleTopicRequest("sendMessage",sendMessage);
handleTopicRequest("getBasicDetails",getBasicDetails);

handleTopicRequest("jobview", jobview);

handleTopicRequest("job_application",getJobApplications);

handleTopicRequest("profileViews",profileviews);
handleTopicRequest("jobsStarted",adminJobsStarted)
handleTopicRequest("trackUser",adminTrackUser);

