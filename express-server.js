require('coffee-script');
var express = require('express');
var path = require('path');
var app = express();

app.configure(function () {

    app.use(express.bodyParser({
        keepExtensions: true,
        uploadDir: '/tmp',
        defer: true
    }));


    app.use(express.logger('dev'));
    app.use('/', express.static(path.join(__dirname , '/public')));

    app.use(express.methodOverride());
    app.use(express.cookieParser());
});

app.listen(8006);