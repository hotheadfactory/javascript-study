const fs = require('fs');
fs.readFile('list.txt', 'utf8', function(err, data) {
    if(err) throw err;
    var array = data.toString(). split("\n");
    for (let studentNo in array) {
        const [name, age, tel] = array[studentNo].split(' ');
        console.log(name);
    }
});