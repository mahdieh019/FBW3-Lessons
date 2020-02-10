var express = require('express');
var router = express.Router();
var faker = require('faker');
var Product=require('../models/product');


/* GET products listing. */
router.get('/', async(req, res, next)=>{       //http://localhost:3000/products
   try{
    const allProducts= await Product.find();
    let rows='';
    allProducts.forEach((item)=>{
        rows +=
        `<tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.description}</td>
            <td>${item.color}</td>
            <td><button onclick="window.location='http://localhost:3000/products/delete?id=${item.id}'">delete</button></td>  
        </tr>`
    })
    //<td><a href='http://localhost:3000/products/delete?id=${item.id}'>delete</a></td> 


    let addDiv = `<div> <button 
                                style='padding:5px;
                                background:limegreen; 
                                border-radius:15px; 
                                color:white;
                                font-weight:bold' 

                                onclick='window.location ="http://localhost:3000/products/add"'> 
                             Add one product 
                        </button>
                    </div>`;

    let thead='<thead><th>Name </th><th>Price </th><th>Description </th><th>Color </th><th>Delete </th></thead>'
    let dataTable = addDiv+'<table>'+thead+ rows + '</table>'        
    //res.send(allProducts);
    res.send(dataTable);

    }catch(e){
        next(e);
    }
    res.send('<h3>all the products</h3>');
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
    res.redirect("http://localhost:3000/products/");
});



router.get('/delete', function(req,res,next){
    var productId=req.query.id;
    Product.deleteOne({_id:productId}, function(err,res){
        if(err) throw err;
    })
    res.redirect("http://localhost:3000/products/");
})


module.exports=router;




