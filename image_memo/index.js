var express = require ("express");
var util = require ('util');
var multer = require ('multer');
var fs = require ('fs');
var app = express();

var i = 0;
var maxFileSize = 3000000;
var filePath = '/home/hkeylocal/works/javascript-study/image_memo/uploaded';
var storage = multer.diskStorage({ destination : function (req, file, callback) {
    callback(null, filePath);
}, 
filename : function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
}
});

var upload = multer({ storage : storage, limits: { filesize: maxFileSize } }).array('userPhoto', null);

app.get('/', function(req, res) { 
    fs.readFile
})