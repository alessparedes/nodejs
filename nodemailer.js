const configMensaje = require("./configMensaje");
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Hello World\n' + req.body + '\n h');
    console.log(req.body);
    configMensaje(req.body);
}).listen(3100, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3100/');