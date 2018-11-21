ECHO OFF
ECHO Creating topics
E:
cd Softwares\kafka_2.11-1.1.0\bin\windows

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_signup
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_signup

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_signin
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_signin

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_people
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_people

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_top5Jobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_top10Jobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_clicks
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_savedJobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_cityWise
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_admin

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic applyjob
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic responseapplyjob

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getsavedjobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic responsegetsavedjobs

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getAllJobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic responseAllJobs

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic savejob
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic responsesavejob

PAUSE
