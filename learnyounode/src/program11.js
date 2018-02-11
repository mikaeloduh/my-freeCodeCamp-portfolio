var http = require("http");
var fs = require("fs");
var concat = require("concat-stream");

var path = process.argv[3];

var server = http.createServer(function(request, response) {

  var stream = fs.createReadStream(path);
  
  var reply = concat(data => {
     data = data.toString();
     response.write(data);
     
     response.end();
  });
  
  stream.pipe(reply);
  
});
    
server.listen(+process.argv[2]);
