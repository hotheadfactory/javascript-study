var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/socket.client.html');
});

app.use(express.static('public'));

io.on('connection', function(socket) {
  socket.on('sentFromClient', function(data) {
    console.log('클라이언트에서 받음: %s', data.msg);
    var msg = {
      msg: data.msg
    };
    socket.emit('sendToClient', msg);
  });
});

server.listen(80, function() {
  console.log('Socket IO server listening on port 80');
});