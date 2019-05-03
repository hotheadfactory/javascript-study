const express = require('express');
const path = require('path');
const static = require('serve-static');
const multer = require('multer');
const app = express();
const port = 8080;

app.set('port', process.env.PORT || 8080);
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
        files: 10, 
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
        console.dir(req.files[0]);
        console.dir('#=============================#')
        
        var originalname = '', 
            filename = '',
            mimetype = '',
            size = 0;

            if(Array.isArray(files)) {
                for(var index = 0; index < files.length; index++) {
                    originalname = files[index].originalname;
                    filename = files[index].filename;
                    mimetype = files[index].mimetype;
                    size = files[index].size;
                }
            }
            
            res.writeHead('200', {'Content-type':'text/html;charset=utf8'});
            res.write('<h3>메모가 저장되었습니다.<br>서버에 저장된 사진: </h3>');
            res.write('<img src="/uploads/'+filename+'" width="200">');
            res.write('<hr/>');
            res.write('<p>http://168.131.39.34:8080/uploads/' + filename + '</p>');
            res.write('<p>MIME TYPE : ' + mimetype + '</p>');
            res.write('<p>Filesize : ' + size + '</p>');
            res.write('<input type="button" value="다시 작성" onclick="history.go(-1)">');
            res.end();
    } catch(err) {
        console.dir(err.stack);
    }
});

app.use('/', router);

app.listen(port, function() {
    console.log('서버 가동 중! (' + port + '번 포트)');
});