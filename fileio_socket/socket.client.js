const port = 8080;
const host = 'localhost';
const net = require('net');


var client = net.connect({port, host},function(){
  console.log('Client is ready');
});

client.on('data',function(data){
  console.log("받음 : "+data);
  client.write(data);
});