var express = require('express');
var app = express();

//添加路由
app.get('/', function(req, res){
    res.send('hello Express');
});

//带参数路由
app.get('/test/:word',function(req, res){
    res.send(req.params.word);
})
//正则表达式路由
app.get(/\/regx\/\d+/,function(req, res){
    res.send('regx:' + req.url);
})

app.listen(8006);