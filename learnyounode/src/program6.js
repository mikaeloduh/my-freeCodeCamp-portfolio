var fs = require("fs");
var path = require("path");
var extFilter = require("./extFilter.js")

var dict = process.argv[2];
var ext = process.argv[3];


function output(err, f) {
  if (err) return console.error("Error:", err);
  
  f.forEach( d => console.log(d));
}

extFilter(dict, ext, output);
