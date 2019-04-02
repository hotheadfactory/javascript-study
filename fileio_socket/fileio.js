var fs = require('fs');
fs.readFile('list.txt', 'utf8', function(err, data) {
    if(err) throw err;
    var array = data.toString(). split("\n");
    for (i in array) {
        const [name, age, tel] = array[i].split(' ');
        console.log(name);
    }
});