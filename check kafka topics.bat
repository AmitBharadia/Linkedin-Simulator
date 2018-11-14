ECHO "Checking kafka topics"
E:
cd Softwares\kafka_2.11-1.1.0\bin\windows
call kafka-topics.bat --list --zookeeper localhost:2181

PAUSE