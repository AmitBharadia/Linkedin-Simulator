ECHO "Checking kafka topics"
D:
cd /setup SJSU laptop/kafka_2.11-1.1.0/bin/windows
call kafka-topics.bat --list --zookeeper localhost:2181

PAUSE