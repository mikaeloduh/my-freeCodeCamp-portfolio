var express = require("express");

var app = express();

app.get("/search", function(request, response){
        var obj = request.query;
        
        response.send(obj);
    });

app.listen(process.argv[2]);
