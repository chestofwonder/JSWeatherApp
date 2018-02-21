var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var publicFolder = "public";

http.createServer(function (req, res) {
  var requestUrl = url.parse(req.url);
  var pathname = './' + publicFolder + requestUrl.pathname;

  const mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.eot': 'appliaction/vnd.ms-fontobject',
    '.ttf': 'aplication/font-sfnt'
  };
  
  fs.exists(pathname, function (exist) {
    if(!exist) {
      res.statusCode = 404;
      res.end("File " + pathname + " not found");
      return;
    }

    if (fs.statSync(pathname).isDirectory()) {
      pathname += '/index.html';
    }

    fs.readFile(pathname, function(err, data){
      if(err){
        res.statusCode = 500;
        res.end("Error getting the file: " + err);
      } else {
        var ext = path.parse(pathname).ext;

        res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
        res.end(data);
      }
    });
  });
}).listen(9000);

console.log('Server listening on port 9000');
