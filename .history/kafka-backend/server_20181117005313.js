var connection = new require("./kafka/Connection");
//topics files
var signin = require("./services/signin");
var signup = require("./services/signup");
var getInvitations = require("./services/getInvitations");
var getRecommendations = require("./services/getRecommendations");
var removeConnection = require("./services/removeConnection");
var ignoreInvitation = require("./services/ignoreInvitation");
var addConnection = require("./services/addConnection");
var acceptConnection = require("./services/acceptConnection");

function handleTopicRequest(topic_name, fname) {
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");
  consumer.on("message", function(message) {
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function(err, res) {
      console.log("Result :" + res + " Error : " + err);
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
handleTopicRequest("getInvitations", getInvitations);
handleTopicRequest("get_recommendations", getRecommendations);
handleTopicRequest("removeConnection", removeConnection);
handleTopicRequest("ignore_Invitation", ignoreInvitation);
handleTopicRequest("add_connection", addConnection);
handleTopicRequest("accept_connection", acceptConnection);
