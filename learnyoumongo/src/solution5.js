var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/learnyoumongo";
var input1 = process.argv[2];
var input2 = process.argv[3];

var doc = {firstName: input1, lastName: input2};

mongoClient.connect(url, (err, client) => {
    if (err) throw err;
    
    var _db = client.db("learnyoumongo");
    var docs = _db.collection("docs");
    
    docs.insert(doc, (err, data) => {
        if (err) throw err;
        console.log(JSON.stringify(doc));
    });
    
    client.close();
});
