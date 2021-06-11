var http = require('http'),
  url = require('url'),
  path = require('path'),
  fs = require('fs'),
  util = require('util'),
  querystring = require('querystring');
var rootpath = process.cwd();
var MIMETYPES = {
  'css' : 'text/css',
  'htm' : 'text/html',
  'html': 'text/html',
  'js'  : 'application/javascript',
  'ico' : 'image/x-icon',
  'jpg' : 'image/jpeg',
  'png' : 'image/png',
  'mp3' : 'audio/mp3',
  'ogg' : 'audio/ogg',
  'plist':'text/xml'
};

http.createServer(function(req, res) {
  if (req.method !== 'GET') {
    console.log(req.method, req.url);
    req.setEncoding("utf8");
    req.addListener("data", function (postDataChunk) {
      //console.log(postDataChunk);
      console.log(querystring.parse(postDataChunk));
    });
    req.addListener("end", function () {
      res.writeHead(400);
      res.write('GET Only.');
      res.end();
    });
    return;
  }
  if (req.url === '/favicon.ico') {
    console.log(req.headers);
    res.write('');
    res.end();
    return;
  }
  var request_time = process.hrtime()[1];
  var filename = decodeURIComponent(path.join(rootpath, url.parse(req.url).pathname));
  //console.log(req.url, url.parse(req.url), filename, rootpath);
  if ('/jsonp' === req.url.slice(0, 6)) {
    var callback = url.parse(req.url).search.split('jsonp=')[1];
    res.write(callback + '({abc:123})');
    res.end();
    return;
  }

  fs.stat(filename,function(err,fstats){
    if (err) {
      if ('.map' !== req.url.slice(-4)) {
        var rurl = url.parse(req.url);
        console.log('404', rurl.pathname);
        rurl.search && console.log(querystring.parse(rurl.search.slice(1)));
      }
      res.writeHead(404);
      res.write('Not Found');
      res.end();
      return;
    }
    if(fstats.isFile() && filename.indexOf(rootpath) == 0){
      var ext = path.extname(filename).toLowerCase().slice(1);
      console.log("sending file %s ",filename, ext);
      res.writeHead(200, {'Content-Type': MIMETYPES[ext] || "application/octet-stream"});
      fs.createReadStream(filename).pipe(res);
    }else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width'><title>File List</title><body><h2>File List</h2><br>");
      fs.readdir(filename,function(err,files){
        if(files.length == 0 || err){
          res.write("No files available.");
        }else{
          var i, p;
          res.write("<table border='2px' cellpadding='5px'><tr><td><b>File Name</b></td><td><b>Size</b></td></tr>");
          for(i = 0; i < files.length; i++){
            p = path.join(filename,files[i]);
            res.write(util.format("<tr><td><a href='\%s'>%s</a></td><td> %d kb </td></tr>",p.slice(rootpath.length),files[i],fs.lstatSync(p).size / 1000.0));
          };
          res.write("</table>");
        }
        var end_time = process.hrtime()[1];
        res.write(util.format("<br><br><small>Page build in %dms nodejs %s</body></html>", (end_time - request_time) / 1e6, process.version));
        res.end();
      });
    }
  });
}).listen(7000);

console.log('open: http://localhost:7000/index.html')
