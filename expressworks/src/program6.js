var express = require("express");
var crypto = require("crypto");

var app = express();

app.put("/message/:id", function(request, response){
        var id = request.params.id;
        var output = crypto.createHash('sha1')
                           .update(new Date().toDateString() + id)
                           .digest('hex');
        response.send(output);
    });

app.listen(process.argv[2]);
