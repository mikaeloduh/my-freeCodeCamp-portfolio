var http = require("http");

var url = process.argv[2];

http.get(url, response => {
    
    response.setEncoding();
    
    response.on("error", data => console.log(data) );
    response.on("data", data => console.log(data) );
    response.on("end", data => console.log("") );
    
}).on('error', (e) => {
  console.error("Error:", e);
});
