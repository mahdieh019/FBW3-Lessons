var express = require('express');
var router = express.Router();
const low=require('lowdb');
const FileSync=require('lowdb/adapters/FileSync');
const adapter=new FileSync('data/db.json');
const db=low(adapter);
let data = db.get('records');

db.defaults({"records": [
      {
        "id": 0,
        "title": "Samsung Galaxy S10+ Smartphone (16,35 cm/6,4 Zoll, 512 GB Speicherplatz, 12 MP Kamera)",
        "price": 899.99
      },
      {
        "id": 2,
        "title": "samsung Phone Blue",
        "price": 100
      },
      {
        "id": 3,
        "title": "Huawei Mate20 Smartphone (16,59 cm/6,5 Zoll, 128 GB Speicherplatz, 12 MP Kamera)",
        "price": "379,99"
      }
    ],
    "count": 3}).write();
 


/* GET records listing. */           //http://localhost:3000/records
router.get('/', function(req, res, next) {
  //res.send('the dummy page for records');
  res.status(200).send(data);
});

//GET particular record using id
router.get('/:id',function(req,res){
  //filtering
  let item=data.filter(item=>{
    if(item.id==req.params.id){      //http://localhost:3000/records/0
       return true;
    }    
  });
  console.log(item.id);
  res.status(200).send(item);
})

//POST a new record
router.post('/', function(req, res){
  let count = db.get('count');
  let title = req.body.title;
  let price = req.body.price;
  //Get array of titles
  let arrayTitles =  db.get('records').map('title').value();
  //Check that the new title is not duplicated
  let duplicated = false;
  console.log(arrayTitles)
  arrayTitles.forEach((item)=>{
    if (item === title){
        duplicated = true;
    }
  })
  //
  if(duplicated === false){
      db.get('records').push({ id: count, title: title, price: price }).write();
      
      db.update('count', number =>  number + 1).write()
      res.status(200).send('inserted database has been updated \n')
  }else{
    res.status(409).send('Alreday exist!')
  }
 });

// router.post('/',(req,res)=>{
//   let title=req.body.title;
//   let price=req.body.price;
//   console.log(title);
//   console.log(price);
//   // let id=data.__wrapped__.records.length;
//   let count =db.get('count');
//   // add to db.json
//   data.forEach(item=>{
//     if(item.title==req.params.title && item.price==req.body.price){
//       res.status(404).send('database has been');
//     }else{
//       db.get('records')
//       .push({
//       // id:id,
//         id:count,
//         title: title,
//         price: price
//       }).write();
    
//     //increment count
//     db.update('count',n=>n+1)
//     .write();
//     res.status(200).send('database has been updated');
//     };
//   })
// });

//delete
router.post('/delete',(req,res)=>{
  let id=parseInt(req.body.id);
  db.get('records')
  .remove({id:id})
  .write();
 res.status(200).send('you have removed item ' + id);
});

module.exports = router;

