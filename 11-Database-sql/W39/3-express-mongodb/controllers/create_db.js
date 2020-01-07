const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
const url='mongodb://localhost:27017/'

function create_db(db_name,collection_name){
    MongoClient.connect(url,function(err,db){
        if(err)throw err;
        let myDb=db.db(db_name);
        myDb.createCollection(collection_name,function(err,res){
            if(err)throw err;
            console.log("collection created");
            db.close();
        })
    })
}
module.exports=create_db;