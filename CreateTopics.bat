ECHO OFF
ECHO Creating topics
c:
cd \kafka_2.11-1.1.0\bin\windows

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_signup
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_signin
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_people
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic delete_profile

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_top5Jobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_top10Jobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_clicks
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_savedJobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_cityWise

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_job
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic profile
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getprofile
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_delete

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getInvitations
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_recommendations
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic remove_connection
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic ignore_Invitation
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic add_connection
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic accept_connection
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_invitations
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_connection_count
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic get_all_connections

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic applyjob
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getAllJobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getsavedjobs
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic savejob
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic posted_job
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_topic

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getChatList
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getMessageDetails
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic sendMessage
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getBasicDetails

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic jobview
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic profileViews
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic jobsStarted
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic getapplyjob
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic trackUser

call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic 	
call kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic edit_job

PAUSE
