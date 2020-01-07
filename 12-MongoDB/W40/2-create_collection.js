const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
const url="mongodb://localhost:27017/";

//create a new connection "customers in the database "mydb"
MongoClient.connect(url,function(err,db){
    if(err)throw err;
    let mydb=db.db("mydb"); // to connect to existing db which is mydb
    mydb.createCollection("customers",function(err,res){
        if(err)throw err;
        console.log("Collection created!");
        db.close();
    });
})

//insert google into collection "customers"
MongoClient.connect(url,function(err,db){
    if (err)throw err;
    let mydb=db.db("mydb");
    let myobj={name: "google", address:"Silicon Valley"};
    mydb.collection("customers").insertOne(myobj,function (err,res){
        if(err)throw err;
        console.log("ist document inserted");
        db.close();
    });


    let myobj2={name: "facebook", address:"New York"};
    mydb.collection("customers").insertOne(myobj2,function (err,res){
        if(err)throw err;
        console.log("ist document inserted");
        db.close();
    });



    let myobj3={name: "zalando", address:"Hamburg"};
    mydb.collection("customers").insertOne(myobj3,function (err,res){
        if(err)throw err;
        console.log("3rd document is inserted");
        db.close();
    });

})