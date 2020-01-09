const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true});

let productSchema=new mongoose.Schema({
    name: String,
    price:Number
});


let Product=mongoose.model('Product',productSchema); 


let db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', function(){

    // we are connected
    console.log("we are connected!");
    

    //finde all products
    // Product.find(function(err,products){
    //     if(err)throw console.log(err);
    //     console.log(JSON.stringify(products, null,4));
    //     db.close();
    // });


    // filter
    Product.find({name:/^Sam/},function(err,products){
        if(err)throw console.log(err);
        console.log(JSON.stringify(products, null,4));
        db.close();
    });

 });
