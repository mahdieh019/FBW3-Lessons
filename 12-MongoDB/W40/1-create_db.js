//***************************To run the code********************************** */
//sudo service mongod start            first mongodb should be started 

//npm install mongodb
//node 1-create_db.js
//node create_collection.js
//node find_documents.js
//node sort.js
//node delete.js
//node drop.js
//*************************************************************************** */

const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
const url="mongodb://localhost:27017/mydb";

//create database
MongoClient.connect(url, function(err,db){
    if(err)throw err;
    console.log("Database created");
    db.close();
})