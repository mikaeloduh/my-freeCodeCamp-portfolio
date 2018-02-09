
var http = require("http");
var concat = require('concat-stream');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var task = [url1, url2, url3];
var output = [];

var i = 0;
function reqFunc(d) {
    http.get(d, response => {

        var stream = concat(data => {
            data = data.toString()
            
            output[i] = data;
            i++;
            if (i===3)
             output.forEach( d => console.log(d) );
        });
        
        response.pipe(stream);
        
    }).on('error', (e) => {
      console.error("Error:", e);
    });
}


task.forEach( d => reqFunc(d) );
