ECHO OFF
ECHO Creating a topic topic
d:
cd setup d:/SJSU laptop/kafka_2.11-1.1.0/bin/windows
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic  