var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");

var app = express();

var urlBodyParser = bodyparser.urlencoded({extended: false});

app.post('/form', urlBodyParser, (request, response) => {
        
        var rstr = request.body.str.split('').reverse().join('');
        response.send(rstr);
    });

app.listen(process.argv[2]);
