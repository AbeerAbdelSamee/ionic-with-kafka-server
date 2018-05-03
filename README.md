# ionic-with-kafka-server
first Install Kafka and Zookeeper from the following link 
http://kafka.apache.org
Source Code :
https://drive.google.com/open?id=10HS_3ZGvuMjhssT_ImO6Xq0Zg3t89H_1
steps :
run Kafka && zookeeper && create topic && create producer
steps as command:
1-bin/zookeeper-server-start.sh config/zookeeper.properties
2-bin/kafka-server-start.sh config/server.properties
3-bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic Kafka-pidge

4-bin/kafka-console-producer.sh --broker-list localhost:9092 --topic Kafka-pidge

----------
to install node and socket.io server
1-cd SocketServer
2-npm install
3-npm i kafka-node
4-node index.js

---------------
then run ionic 3 application 
with 
1-cd devdacticSocket
2-ionic server
3- send message from producer in terminal (you will find alert with msg send from terminal) in ionic app
