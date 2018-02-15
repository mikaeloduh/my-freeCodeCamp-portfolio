var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var input1 = process.argv[2];
var url = "mongodb://localhost:27017/" + input1;


mongoClient.connect(url, (err, client) => {
    if (err) throw err;
    
    var _db = client.db(input1);
    var users = _db.collection("users");
    
    users.update({"username": "tinatime"}, {$set:{"age": 40}}, (err, data) => {
            if (err) throw err;
         });
    
    client.close();
});
