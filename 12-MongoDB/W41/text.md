sudo service mongod start
mongo
show dbs
use newdb // it creates the new db. or it switched to the db which is exist.
show collections // it creates the collections in the db. after creating the collections ,it shows the new db in the  db list
db.customers.find()

db.articles.insertOne({name: "Apple iphone 8 64 gb", price: 400}) 

db.articles.find({name:"Apple iphone 8 64 gb" })

db.articles.insertMany([{name:"Dell laptop", price:600},{name:"mac book air",price:300 }])

db.articles.find({price:{$lte:600}}) // price less or equql to 600 
db.articles.find({price:{$lt:600}}) //price less than 600
db.articles.find({price:{$gt:600}}) // only greater than 600
db.articles.find({price:{$gte:600}}) // equals or greater than 600

 db.articles.updateOne({name:"Apple iphone 8 64 gb"}, {$set:{price:999}})

 db.articles.updateMany({price:{$gt:700}},{$set:{pro:true}})

 db.articles.updateMany({price:{$lt:700}},{$set:{pro:true}})

db.articles.find()

db.articles.deleteMany({price:300 })

2h9zEPRo1VzFx1hO
-------------------------------------------------------------
use shop
db.createCollection('article')
db.articles.insertOne({name:"Mac Book 2020" , price:2300})


-----------------in MongoDB Compass--------------------------------------------

username: rania
pw: SO08j2sV7iDTzCSg


