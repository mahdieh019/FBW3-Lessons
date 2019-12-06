var express = require('express');
var router= express.Router();
const low=require('lowdb');
const FileSync=require('lowdb/adapters/FileSync');
const adapter= new FileSync('data/data.json');
const db=low(adapter);
let data=db.get('list');

router.get('/',function(req,res,next){
    //res.send('the dummy page for records');
    res.status(200).send(data);
});


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



router.post('/delete',(req,res)=>{
    let id=parseInt(req.body.id);
    db.get('list')
    .remove({id:id})
    .write();
   res.status(200).send('you have removed item ' + id);
  });

module.exports = router;