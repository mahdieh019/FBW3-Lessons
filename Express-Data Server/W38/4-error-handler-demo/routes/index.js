//https://github.com/Mansour-Tumeh/FBW3-Lessons/tree/master/Data%20Server/8-error-handling
var express = require('express');
var router = express.Router();
const fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/broken' , function(req,res,next){
  throw new Error("Hey Joe something went wrong ")
})

router.get('/forbidden',function(req,res,next){
  let err=new Error('You are trying to access /Forbidden');
  err.statusCode=403;
  next(err)
})


//Async code
//Task: Create your own route with a custom message.
// router.get('/download', function (req, res, next) {
//   fs.readFile('/file-does-not-exist', function (err, data) {
//     if (err) {
//       next(err) // Pass errors to Express.
//     } else {
//       res.send(data)
//     }
//   })
// });

// to handle the error
router.get('/download', function (req, res, next) {
   let file=req.query.file;  // http://localhost:3000/download?file=mydata.txt
  fs.readFile(__dirname + '/../data/' + file,'UTF-8', function (err, data) {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
});

//http://localhost:3000/divide?x=2&y=3
router.get('/divide',function(req,res,next){
  try{
    x=parseInt(req.query.x);
    y=parseInt(req.query.y);
    if(y==0){
      throw new Error('You are trying to divide by zero');
    }else{
      res.send(String(x/y));
    }
  }catch(err){
    next(err.message);
  }
})


//localhost:3000/multiply?x=2&y=3
//using promisses

router.get('/multiply', function(req,res,next){
  Promise.resolve().then(function(){
    x = parseInt(req.query.x);
    y = parseInt(req.query.y);
    // TODO:check if X OR Y defined
 

    if (y == 0) {
      throw new Error('You trying to multiply by zero');
    }else if(isNaN(x) || isNaN(y) ){
      throw new Error('can not convert string to integer  ');
    }else if(typeof(x)!="undefined" || typeof(y)!="undefined" ){
      throw new Error('It seems yoy do not know what you are doing ... sorry');
    }
    else {
      res.send(String(x/y));
    }
    //same logic with throw new Error....as in "/divide"
  }).catch(next)
});





module.exports = router;
