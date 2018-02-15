var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var dbName = process.argv[2];
var collecName = process.argv[3];
var id = process.argv[4];
var url = "mongodb://localhost:27017/" + dbName;


mongoClient.connect(url, (err, client) => {
    if (err) throw err;
    
    var _db = client.db(dbName);
    var collec = _db.collection(collecName);
    
    collec.remove({_id: id}, (err, data) => {
             if (err) throw err;
          });
    
    client.close();
});
