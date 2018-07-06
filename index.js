var http = require('http');
var fs   = require('fs');

var documentRoot = './www';

http.createServer(function (request, response) {
  var uri = request.url;
  if (uri === '/') {
    uri = '/index.html';
  }

  fs.readFile(documentRoot + uri, function (error, content) {
    if (error) { throw error; }

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(content);
    response.end();
  });
}).listen(8888, 'localhost');
