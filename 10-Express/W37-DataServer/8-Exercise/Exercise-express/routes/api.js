var express = require('express');
var router= express.Router();
const low=require('lowdb');
const fetch=require('node-fetch');
const FileSync=require('lowdb/adapters/FileSync');
const adapter= new FileSync('data/data.json');
const db=low(adapter);
let data=db.get('list');


router.get('/',function(req,res,next){
    //res.send('the dummy page for records');
    res.status(200).send(data);
   
});



// ---------------------using fetch in server side  (first way)---------------
// router.get('/',function(req,res,next){
//     //res.send('the dummy page for records');
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => response.json())
//     .then(datafromplaceholder => res.status(200).send(datafromplaceholder))
   
// });
//----------------------another way   (second way)-----------------------------
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json => console.log(json))


router.post('/post',(req,res)=>{
    let id=parseInt(req.body.id);
    let title=req.body.title;
    let price=req.body.price;
    let color=req.body.color;
    let years=req.body.years;
    // let array_title=data.map('title').value();
    // let array_price=data.map('price').value();
    // let array_color=data.map('color').value();
    // let array_years=data.map('years').value();

})

//update a post
router.put('/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    console.log(id)
    db.get('list')
    .find({id:id})
    .assign(req.body)
    .write();
    res.send("update")
})


//delete a post
// router.delete('/:id',(re,res)=>{
//     let id=parseInt(req.params.id);
//     db.get('')
// })



  

router.post('/delete',(req,res)=>{
    let id=parseInt(req.body.id);
    db.get('list')
    .remove({id:id})
    .write();
   res.status(200).send('you have removed item ' + id);
  });

module.exports = router;