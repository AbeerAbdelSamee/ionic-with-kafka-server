let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
var kafka = require('kafka-node'),
Consumer = kafka.Consumer,
client = new kafka.Client(),
consumer = new Consumer(
    client,
    [
        { topic: 'kafka-pidge' }
    ],
    {
     //   autoCommit: false
    }
);
consumer.on('message', function (message) {
  console.log(message);
  
})
io.on('connection', (socket) => {
 
  // socket.on('consumer', function(){

    consumer.on('message', function (message) {
      console.log(message);
      io.emit('consumer-text',{message:message});   

  });
  
  // });

  // socket.on('disconnect', function(){
  //   io.emit('users-changed', {user: socket.nickname, event: 'left'});   
  // });
 
  // socket.on('set-nickname', (nickname) => {
  //   socket.nickname = nickname;
  //   io.emit('users-changed', {user: nickname, event: 'joined'});    
  // });
  

  // socket.on('add-message', (message) => {
  //   io.emit('message', {text: message.text, from: socket.nickname, created: new Date()});    
  // });
});
 
var port = process.env.PORT || 3001;
 
http.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});