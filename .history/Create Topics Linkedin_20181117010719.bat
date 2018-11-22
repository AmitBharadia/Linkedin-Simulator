ECHO OFF
ECHO Creating topics
C:
cd kafka_2.11-1.1.0\bin\windows

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_signup
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_signup
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_signin
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_signin
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_people
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_people
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getInvitations
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_recommendations
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic removeConnection
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic ignore_Invitation
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic add_connection
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic accept_connection
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic accept_connection

PAUSE

