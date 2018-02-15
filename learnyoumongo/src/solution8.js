var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var input1 = process.argv[2];
var url = "mongodb://localhost:27017/learnyoumongo";


mongoClient.connect(url, (err, client) => {
    if (err) throw err;
    
    var _db = client.db("learnyoumongo");
    var parrots = _db.collection("parrots");
    
    parrots.count({age: {$gt: parseInt(input1)}}, (err, count) => {
              if (err) throw err;
              console.log(count);
           });
    
    client.close();
});
