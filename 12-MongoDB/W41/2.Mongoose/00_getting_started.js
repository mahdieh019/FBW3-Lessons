const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true});//connect to a MongoDB database shop:

let productSchema=new mongoose.Schema({
    name: String,
    price:Number
});

// a class method for log messageing
productSchema.methods.logMessage=function(){
    let msg=`The product ${this.name} with the price ${this.price} has been inserted.`;
    console.log(msg);
}

//-------------------------------------------is a collection --------------------------------
let Product=mongoose.model('Product',productSchema); 


//--------------------------------------products---------------------------------------------
let samsung=new Product({name: 'Samsung Galaxy One', price: 399.99});
console.log(samsung.name);
console.log(samsung.price);

let apple=new Product({name: 'apple X', price: 499.99});
console.log(apple.name);
console.log(apple.price);


//-------------------------------Listening on error and get access to a database-------------------------------------
//---------------We now need to get notified if we connect successfully or if a connection error occurs-------------
let db=mongoose.connection; 
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', function(){

    // -------------------------we are connected
    console.log("we are connected!");

    //-------------------------save samsung here
    samsung.save(function(err,samsung){
        if (err)return console.error(err);
        //console.log('samsung saved!');
        samsung.logMessage();
        db.close();

    })

    //--------------------------save apple here
    apple.save(function(err,apple){
        if (err)return console.error(err);
        //console.log('apple saved!');
        apple.logMessage();
        db.close();

    });
    Product.find({name:/^Sam/},function(err,products){
        if(err)throw console.log(err);
        console.log(JSON.stringify(products, null,4));
        db.close();
    });
});
