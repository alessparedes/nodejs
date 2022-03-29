var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.configMensaje(req.body);
    res.end('Hello World\n' + req + 'h');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');