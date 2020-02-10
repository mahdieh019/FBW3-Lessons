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
db.once('open', async function(){

    // -------------------------we are connected
    console.log("we are connected!");

    
    try{
        // save samsung async
        const product=new Product(samsung);
        await product.save();
        await console.log('saved');

        //find all samsungs
        const found_products=await Product.find();
        await console.log('found');
        await console.log(JSON.stringify(found_products, null,4));

        //find by id
        await console.log('find by id');
        const found_product_by_id=await Product.findById('5e1598bae4f1f320a95619ae');
        await console.log(JSON.stringify(found_product_by_id, null,4));

        //delete
        //await Product.deleteMany();
            
        const remove_products = await Product.remove();
        await console.log(JSON.stringify(remove_products, null, 4));
        console.log('Products removed');
    }
    catch(e){
        console.error(e);
    }


    db.close();
 });

