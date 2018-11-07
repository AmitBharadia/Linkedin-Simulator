var kafka = require("kafka-node");
var CONST = require("../const");
function ConnectionProvider() {
  this.getConsumer = function(topic_name) {
    this.client = new kafka.Client(CONST.KAFKA_URL);
    this.kafkaConsumerConnection = new kafka.Consumer(this.client, [
      { topic: topic_name, partition: 0 }
    ]);
    this.client.on("ready", function() {});

    return this.kafkaConsumerConnection;
  };

  //Code will be executed when we start Producer
  this.getProducer = function() {
    if (!this.kafkaProducerConnection) {
      this.client = new kafka.Client(CONST.KAFKA_URL);
      var HighLevelProducer = kafka.HighLevelProducer;
      this.kafkaProducerConnection = new HighLevelProducer(this.client);
    }
    return this.kafkaProducerConnection;
  };
}
exports = module.exports = new ConnectionProvider();
