const port = 8080;
const net = require('net');

var server = net.createServer(function(client) {
  client.write('히사시부리~!');
  client.on('data', function(data) {
    console.log("받음 : "+data);
  });
});
server.listen(port, function() {
  console.log('Server is ready at port '+port);
});