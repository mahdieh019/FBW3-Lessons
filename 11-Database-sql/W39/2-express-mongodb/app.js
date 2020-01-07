const mongo=require('mongodb');
const express = require('express');
const MongoClient=mongo.MongoClient;
const app = express();

app.listen('3001',()=> {
    console.log('Server started on port 3001');

});
app.get('/',(req,res)=>{
    res.send('<h2>Welcome to the mongoDB </h2>');

});

//1. Create mongoDB       http://localhost:3000/createdb
let url='mongodb://localhost:27017/newdb';
app.get('/createdb' , (req,res)=>{
    MongoClient.connect(url, function(err,db){
        if(err)throw err;
        console.log("Database created");
        db.close();
    })
})

//2. connection
app.get('/createpoststable', (req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err)throw err;
        let mydb=db.db("newdb"); // to connect to existing db which is newdb
        mydb.createCollection("customers",function(err,res){
            if(err)throw err;
            console.log("Collection created!");
            db.close();
        });
    })

});

//3. insert google into collection "customers"
app.get('/addpost1',(req,res)=>{
    MongoClient.connect(url,function(err,db){
    // insert post 1
        if (err)throw err;
        let mydb=db.db("newdb");
        let myobj={name: "google", address:"Silicon Valley"};
        mydb.collection("customers").insertOne(myobj,function (err,res){
            if(err)throw err;
            console.log("ist document inserted");
            db.close();
            });


    // insert post 2
        let myobj2={name: "facebook", address:"New York"};
        mydb.collection("customers").insertOne(myobj2,function (err,res){
            if(err)throw err;
            console.log("ist document inserted");
            db.close();
        });

    // insert post 3
        let myobj3={name: "zalando", address:"Hamburg"};
        mydb.collection("customers").insertOne(myobj3,function (err,res){
            if(err)throw err;
            console.log("3rd document is inserted");
            db.close();
        });


    })
})


// get list of all documents
// select posts   (find connection)  
app.get('/getposts' , (req,res)=>{
    MongoClient.connect(url, function(err,db){
        if (err) throw err;
        let mydb=db.db("newdb");
        mydb.collection("customers").find({}).toArray(function(err, result){
            if(err)throw err;
            console.log("one document updated");
            db.close();
        });
    })
})

app.get('/update' ,(req,res)=> {
    MongoClient.connect(url,function(err,db){
            if (err)throw err;
            let mydb=db.db("newdb");
            let myobj={name: "google"};
            let newobj={ $set: {name: "cisco"}};
            mydb.collection("customers").updateMany(myobj,newobj,function (err,res){
                if(err)throw err;
                console.log("one document updated");
                db.close();
            });
    })
})

// Delete Post(one)
// delete one
// app.get('/deletepost/:id' ,(req,res)=> {
//     MongoClient.connect(url,function(err,db){
//         if (err)throw err;
//         var mydb=db.db("newdb");
//         var myquery={name:"google"};
//         mydb.collection("customers").deleteOne(myquery,function(err,obj){
//             if(err)throw err;
//             console.log("deleting first occurance with name google");
//             db.close();
//         })
//     })
// })

//delete many
app.get('/deletepost' ,(req,res)=> {
    MongoClient.connect(url,function(err,db){
        if (err)throw err;
        let mydb=db.db("newdb");
        let myquery={name:"facebook"};
        mydb.collection("customers").deleteMany(myquery, function(err,obj){
            if(err)throw err;
            console.log("deleted all facebook documents");
            console.log(obj.result.n + "document(s) deleted");
            db.close();
        })
    })
})

//sort db
app.get('/sort' ,(req,res)=> {
    MongoClient.connect(url, function(err,db){
        if (err) throw err;
        let mydb=db.db("newdb");
        let mysort={name:1};
        // {name:1}  ascending -> a,b,c
        // {name: -1}  descending -> c,b,a
        mydb.collection("customers").find().sort(mysort).toArray(function(err,result){
            if (err)throw err;
            console.log("Sorting the List... ");
            console.log(result);
            db.close();
        })
    })
})


//drop connection
app.get('/drop' ,(req,res)=> {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var mydb = db.db("mydb");
        mydb.collection("customers").drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
        });
    });
})