var http = require('http'),
    fs = require('fs'),
    
    html = fs.readFileSync('./index.html'),
    js = fs.readFileSync('./main.js'),
    
    boundary = 'aaa';

http.createServer(function (req, res) {
  switch (req.url) {
    case '/':
    case '/index.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
      break;
    
    case '/main.js':
      res.writeHead(200);
      res.end(js);
      break;
    
    default:
      res.writeHead(200, {'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'});
      var i = 0;
      setInterval(function () {
        res.write('--' + boundary + '\r\n\r\n' + String(i++) + '\r\n');
      }, 1000);
  }
}).listen(9999);
