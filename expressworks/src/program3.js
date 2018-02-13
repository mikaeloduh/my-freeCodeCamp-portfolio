var express = require("express");
var path = require("path");

var app = express();

app.set("view engine", "pug")
app.set("views", process.argv[3]);
app.get("/home", (request, response) => {
        response.render("index", {date: new Date().toDateString()});
    });


app.listen(process.argv[2]);
