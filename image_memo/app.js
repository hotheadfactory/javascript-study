const express = require('express');
const path = require('path');
const static = require('serve-static');
const multer = require('multer');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host    : '-',
    user    : '-',
    password: '-',
    database: '-',
    port    :  0
});
const port = 8080;

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/public', static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));

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
        files: 1, 
        filesize: 1024*1024*1024
    }
});

var router = express.Router();

router.route('/process/photo').post(upload.array('photo', 1), function(req, res) {
    console.log('사진 디렉터리 조회됨.');

    try {
        var files = req.files;
        var content = req.body.content || req.query.content;
        var userName = req.body.userName || req.query.userName;

        console.dir('#========= 파일 정보 =========#')
        console.dir('이름: ' + userName);
        console.dir('날짜: ' + Date());
        console.dir('내용: ' + content);
        console.dir(files);
        console.dir('#=============================#')

        res.render('result', files[0]);
        
        connection.connect();
        connection.query('INSERT INTO imageUploadTest( name, time, content, dir) VALUES (\''+ userName +'\', \''+Date.now()+'\', \''+content+'\', \''+files[0].filename+'\');'
        , function(err, rows, fields) {
            if (!err) {
              console.log("DB write successful!");
            }
            else {
                console.log(err);
                console.log("Error while writing into DB!");
            }  
        });
        connection.end();
        } catch(err) {
            console.dir(err.stack);
        }
    });

app.use('/', router);

app.get('/', function(req, res) {
    res.render('photo');
});

app.listen(port, function() {
    console.log('서버 가동 중! (' + port + '번 포트)');
});