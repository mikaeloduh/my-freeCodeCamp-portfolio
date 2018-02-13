var express = require("express");
var fs = require("fs");

var app = express();

app.get("/books", function(request, response){

        fs.readFile(process.argv[3], (err, data) => {
               if (err) throw err;
               
               var object = JSON.parse(data);
               response.json(object);
           });
    });

app.listen(process.argv[2]);
