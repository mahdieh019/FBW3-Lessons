const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
const url="mongodb://localhost:27017/";

//find just a first occurence from the whole collection
MongoClient.connect(url, function(err, db){
    if (err)throw err;
    let mydb=db.db("mydb");
    mydb.collection("customers").findOne({}, function(err, result){
        if (err)throw err;
        console.log(result.name);
        console.log(result.address);
        db.close();
    });
})
// get list of all documents

MongoClient.connect(url, function(err,db){
    if (err) throw err;
    let mydb=db.db("mydb");
    mydb.collection("customers").find({}).toArray(function(err, result){
        if(err)throw err;
        console.log("This is list of all docs");
        console.log(result);
        db.close();

    })
})

// how to use query for special case
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    var query = { name: "facebook" };
    mydb.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log("get list for facebook only");
      console.log(result);
      db.close();
    });
  });
