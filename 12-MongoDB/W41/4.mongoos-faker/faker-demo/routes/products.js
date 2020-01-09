var express = require('express');
var router = express.Router();
var faker = require('faker');
var Product=require('../models/product');



/* GET products listing. */
router.get('/',(req, res, next)=>{
    const allProducts=Product.find();
    console.log();
   // res.send('<h3>all the products</h3>');
});


router.get('/add',(req, res, next)=>{   //http://localhost:3000/products/add
    let newProduct=new Product({
        name: faker.commerce.productName(),
        price:faker.commerce.price(),
        color: faker.commerce.color(),
        description: faker.commerce.productAdjective()
})

    newProduct.save(function(err, result){
        if (err) return console.error(err);

    })
    res.send('<h3> 10 products inserted </h3>');
});




module.exports=router;




