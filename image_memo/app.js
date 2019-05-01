var express = require('express')
    , http = require('http')
    , path = require('path');

var bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , static = require('serve-static')
    , errorHandler = require('errorHandler');

var expressErrorHandler = require('express-error-handler');

var expressSession = require('express-session');

var multer = require('multer');
var fs = require('fs');

var cors = require('cors');

var app = express();
app.set('port', process.env.PORT || 8080);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/public', static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));

app.use(cookieParser());

app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

app.use(cors());

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'uploads')
    }, 
    filename: function(req, file, callback) {
        callback(null, Date.now() + '_' + file.originalname)
    }
});

var upload = multer({
    storage: storage,
    limits: {
        files: 10, 
        filesize: 1024*1024*1024
    }
});

var router = express.Router();

router.route('/process/photo').post(upload.array('photo', 1), function(req, res) {
    console.log('Photo directory called.');

    try {
        var files = req.files;

        console.dir('#===== File information =====#')
        console.dir(req.files[0]);
        console.dir('#============================#')
        
        var originalname = '', 
            filename = '',
            mimetype = '',
            size = 0;

            if(Array.isArray(files)) {
                console.log("Amount of files in array : %d", files.length);
                for(var index = 0; index < files.length; index++) {
                    originalname = files[index].originalname;
                    filename = files[index].filename;
                    mimetype = files[index].mimetype;
                    size = files[index].size;
                }
            }else {
                console.log("Currently there is only one file.");
                originalname = files[index].originalname;
                filename = files[index].filename;
                mimetype = files[index].mimetype;
                size = files[index].size;
            }
            console.log('File information: ' + originalname + ', ' + filename + ', ' + mimetype + ', ' + size);
            
            res.writeHead('200', {'Content-type':'text/html;charset=utf8'});
            res.write('<h3>메모가 저장되었습니다.<br>서버에 저장된 사진: </h3>');
            res.write('<img src="/uploads/'+filename+'" width="200">');
            res.write('<hr/>');
            res.write('<p>Original Filename: ' + originalname + ' -> Stored Filename : ' + filename + '</p>');
            res.write('<p>MIME TYPE : ' + mimetype + '</p>');
            res.write('<p>Filesize : ' + size + '</p>');
            res.write('<input type="button" value="다시 작성" onclick="history.go(-1)">');
            res.end();
    } catch(err) {
        console.dir(err.stack);
    }
});

app.use('/', router);

app.listen(8080, function() {
    console.log('서버 가동 중!');
});