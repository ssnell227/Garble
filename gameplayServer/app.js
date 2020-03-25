const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello there!');
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000')