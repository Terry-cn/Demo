/**
 * Created by Administrator on 13-10-13.
 */
var express = require('express');
var app = express();

//相同URL不同的请求类型返回的数据不同
//http 请求的类型
//添加路由


app.get('/', function(req, res){
    res.send('hello Express');
});

app.post('/', function(req, res){
    res.send('http post');
});

app.put('/', function(req, res){
    res.send('http put');
});

app.delete('/', function(req, res){
    res.send('http delete');
});

app.listen(8006);