var http = require("http");
var url = require("url");

var server = http.createServer(function(request, response) {
  var q = url.parse(request.url, true);
  var isoTime = new Date(q.query.iso);
  
  if (q.pathname === "/api/parsetime") {
    var obj = {
                "hour": isoTime.getHours(),
                "minute": isoTime.getMinutes(),
                "second": isoTime.getSeconds()
              };
    
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(obj));
    response.end();
  }
  
  if (q.pathname === "/api/unixtime") {
    
    var obj = {
                "unixtime": isoTime.getTime()
              };
    
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(obj));
    response.end();
  }
  
});
    
server.listen(+process.argv[2]);
