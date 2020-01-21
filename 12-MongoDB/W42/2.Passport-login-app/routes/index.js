const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
   // res.send('<h1>Welcome</h1>');
    res.render('welcome'); // to connect index.js to welcome.ejs
})

module.exports=router;