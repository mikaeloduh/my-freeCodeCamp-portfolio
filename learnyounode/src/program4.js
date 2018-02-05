var fs = require('fs');
var num = undefined;

function read(callback) {
  fs.readFile(process.argv[2], "utf8", function doneReading(err, data) {
      if (err) throw err;
      
      num = data.split("\n").length - 1;
      callback();
  });
}

function output() {
    console.log(num);
}

read(output);
