var http = require("http");
var concat = require('concat-stream');

var url = process.argv[2];

http.get(url, response => {
    
    var stream = concat(data => {
        data = data.toString();
        console.log(data.length);
        console.log(data);
    });
    response.pipe(stream);
    
}).on('error', (e) => {
  console.error("Error:", e);
});
