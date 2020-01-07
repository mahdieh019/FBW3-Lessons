const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
const url="mongodb://localhost:27017/";

//delete one
MongoClient.connect(url,function(err,db){
    if (err)throw err;
    var mydb=db.db("mydb");
    var myquery={name:"google"};
    mydb.collection("customers").deleteOne(myquery,function(err,obj){
        if(err)throw err;
        console.log("deleting first occurance with name google");
        db.close();
    })
})

//delete many
MongoClient.connect(url,function(err,db){
    if (err)throw err;
    let mydb=db.db("mydb");
    let myquery={name:"facebook"};
    mydb.collection("customers").deleteMany(myquery, function(err,obj){
        if(err)throw err;
        console.log("deleted all facebook documents");
        console.log(obj.result.n + "document(s) deleted");
        db.close();
    })
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

