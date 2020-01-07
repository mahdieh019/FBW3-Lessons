const express=require('express');
const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
const url="mongodb://localhost:27017";


//Altlas url on the  cloud
const clouduri = "mongodb+srv://rania:SO08j2sV7iDTzCSg@cluster0-nev60.mongodb.net/test?retryWrites=true&w=majority";
const app=express();
app.listen('3005',()=>{
    console.log('Server started on port 3005');
});

app.get('/',(req,res)=>{
    res.send('<h2>Welcome to MongoDB project homepage</h2>')
});
// getting data in console
// MongoClient.connect(url,(err,db)=>{
//     if(err)throw err;
//     let mydb=db.db('shop');
//     // mydb.collection('articles').findOne({},(err,result)=>{
//         mydb.collection('articles').findOne({},(err,result)=>{
//         if(err)throw err;
//         console.log(result);
//         db.close();
//     })
// })


// getting data in browser
app.get('/shop',(req,res)=> {
    MongoClient.connect(url , (err, db)=>{
        if(err) throw err;
        let mydb = db.db('shop');
        mydb.collection('articles').findOne({},(err,result)=>{
            if(err) throw err ;
            console.log(result);
            res.send(result)
            db.close();
        })
    });
})

// getting the first row in the articles collections
app.get('/first',(req,res)=> {
    MongoClient.connect(url , (err, db)=>{
        if(err) throw err;
        let mydb = db.db('shop');
        mydb.collection('articles').findOne({},(err,result)=>{
            if(err) throw err ;
            console.log(result);
            res.send(result)
            db.close();
        })
    });
})
// get whole of the list 
app.get('/all',(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if (err)throw err;
        let mydb=db.db('shop');
        mydb.collection('articles').find({}).toArray((err,result)=>{
            if (err)throw err;
            res.send(result);
            db.close();
        })
    })
})
//--------------------------------------- create new collection 'shop'-------------------------------
// creating new Collection which is shop
app.get('/add',(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if (err)throw err;
        let mydb=db.db('shop');
        mydb.createCollection('shop',(err,res)=>{
            if (err)throw err;
            console.log('new collection created');
            db.close();
        })
    })
    res.send('<h1> hi</h1>');
})

// -----------------------------------------------insert----------------------------------
// insert new element to the collection 'shop'
app.get('/add-car',(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err)throw err;
        let mydb=db.db('shop');
        mydb.collection('shop').insertOne({name:"Mercedess" , year: 1289},(err,res)=>{
            if(err) throw err;
            console.log('one user inserted');
            db.close();
        });
    })
    res.send('<h2> new element inserted</h2>');
})

// ---------------------------------------------find all elements------------------------
app.get('/all-car',(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if (err)throw err;
        let mydb=db.db('shop');
        mydb.collection('shop').find({}).toArray((err,result)=>{
            if (err)throw err;
            res.send(result);
            db.close();
        })
    })
})

//----------------------------------------------delete ----------------------------------------
// all elements
app.get('/del-All', (req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err)throw err;
        let mydb=db.db('shop');
        mydb.collection('shop').deleteMany({},(err,result)=>{
            if(err)throw err;
            console.log('deleting users');
            res.send('<h2>'+ result.result.n + ' elements deleted</h2>');
            db.close();
        })
    })
})

//one element
app.get('/del-one', (req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err)throw err;
        let mydb=db.db('shop');
        mydb.collection('shop').deleteMany({name:'BMW'},(err,result)=>{
            if(err)throw err;
            console.log('deleting users');
            res.send('<h2>'+ result.result.n + ' elements deleted</h2>');
            db.close();
        })
    })
})



// --------------------------------------------connect to cload----------------------------------------------------
app.get('/cloud',(req,res)=>{

const client = new MongoClient(clouduri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("shopDB").collection("articles");
  collection.find({}).toArray((err,result)=>{

    if(err)throw err;
    console.log(collection);
    res.send(result);
    client.close();
  });
 
});

})
//----------------------------------------------insert to cloud------------------------------------------------

app.get('/addOne-cloud',(req,res)=>{

    const client = new MongoClient(clouduri, { useNewUrlParser: true });
    client.connect(err => {
    const collection = client.db("shopDB").collection("articles");
    collection.insertOne({name:' iPhad pro 12 inch' ,price: 600 },(err,result)=>{
    
        if(err)throw err;
        console.log('one user inserted');
        client.close();
    });
    
    });
    
})
//many
app.get('/addMany-cloud',(req,res)=>{

    const client = new MongoClient(clouduri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("shopDB").collection("articles");
        collection.insertMany([{name:' iPhone pro 11 inch' ,price: 600 },{name: 'Sony xpedia', price:350}],(err,result)=>{
    
        if(err)throw err;
        console.log('user inserted');
        res.send('<h2>'+ result.result.n + ' elements deleted</h2>');
        client.close();
        });
        
    });
    
})

// --------------------------------------------------delete to cloud --------------------------------------------------
// deleting one element
app.get('/del-cloud',(req,res)=>{

    const client = new MongoClient(clouduri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("shopDB").collection("articles");
        collection.deleteMany({name:' iPhad pro 12 inch'},(err,result)=>{
    
        if(err)throw err;
        console.log('user deleted');
        client.close();
        });
        
    });
})
//-----------------------------------------------------update---------------------------------------------------------
// update one element in cloud
app.get('/update-cloud',(req,res)=>{

        const client = new MongoClient(clouduri, { useNewUrlParser: true });
        client.connect(err => {
        const collection = client.db("shopDB").collection("articles");
        // collection.updateOne({name:' iPhad pro 12 inch'},{$set:{price:999}},(err,result)=>{
            collection.updateMany({price:{$lt:250}},{$set:{price:999}},(err,result)=>{
            if(err)throw err;
            console.log('user updated');
            client.close();
        });
        
        });
    })


