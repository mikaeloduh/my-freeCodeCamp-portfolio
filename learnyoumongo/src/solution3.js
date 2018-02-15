var mongodb=require("mongodb").MongoClient;
var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/learnyoumongo";

mongoClient.connect(url, (err, client) => {
    if (err) throw err;
    
    var _db = client.db("learnyoumongo");
    var parrots = _db.collection('parrots');

    parrots.find({age: {$gt: parseInt(process.argv[2])}})
           .toArray((err, data) => {
               if (err) throw err;
               console.log(data);
           });
    
    client.close();
});
