//导入express框架
var express = require("express");
var app = express();
//解决跨域问题
const cors = require('cors');
// 中间件 获取参数的
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//获取json数据
// var data = require('./data.json')
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OP0TIONS");
    res.header("X-Powered-By", "3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.post('/test', function(req, res) {
    var result = {
        code: 200,
        success: true,
        message: "post测试成功！"
    }
    res.json(result);
});

app.get('/test1', function(req, res) {
    var result = {
        code: 200,
        success: true,
        message: "get方法！"
    }
    res.json(result);
});



var server = app.listen(8777, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('启动')
})