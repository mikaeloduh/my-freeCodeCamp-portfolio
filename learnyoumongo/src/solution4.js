var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/learnyoumongo";

mongoClient.connect(url, (err, client) => {
    if (err) throw err;
    
    var _db = client.db("learnyoumongo");
    var parrots = _db.collection("parrots");

    parrots.find( {age: {$gt: parseInt(process.argv[2])}}, 
                  {name: 1, age: 1, _id: 0} )
           .toArray((err, data) => {
               if (err) throw err;
               console.log(data);
           });
    
    client.close();
});
