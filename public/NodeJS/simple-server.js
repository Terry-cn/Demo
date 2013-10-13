var http = require('http');

var onRequest = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Simple Server');
    res.end();
}
app = http.createServer(onRequest).listen(8006);
