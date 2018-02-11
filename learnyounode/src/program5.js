var fs = require("fs");
var path = require("path");

var ext = "." + process.argv[3];

function read(callback) {
  fs.readdir(process.argv[2], "utf8", function doneReading(err, list) {
    if (err) throw err;
    
    var filelist = list.filter(d => path.extname(d) === ext);
    
    callback(filelist);
  });
}

function output(f) {
  f.forEach( d => console.log(d));
}

read(output);
