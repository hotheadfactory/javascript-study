var express = require('express');
var app = express();
var port = 80;
var router = require('./router/main')(app);
var fs = require('fs');
fs.readFile('list.txt', 'utf8', function(err, data) {
    if(err) throw err;
    var array = data.toString(). split("\n");
    for (i in array) {
        console.log(array[i]);
    }
});


app.set('views', __dirname + '/views');
app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));



app.listen(port, function(){
    console.log('Server Start, Port : ' + port);
});