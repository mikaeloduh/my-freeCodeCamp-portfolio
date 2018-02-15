var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var larger = process.argv[2];
var url = "mongodb://localhost:27017/learnyoumongo";


mongoClient.connect(url, (err, client) => {
    if (err) throw err;
    
    var _db = client.db("learnyoumongo");
    var prices = _db.collection("prices");
    
    prices.aggregate([
            {$match: {size: larger}}, 
            {$group: { 
                _id: "", 
                average: {
                    $avg: "$price"
                }
            }}
        ])
        .toArray((err, docs) => {
            if (err) throw err;
            
            console.log(Number(docs[0].average).toFixed(2));
        });
    
    client.close();
});
