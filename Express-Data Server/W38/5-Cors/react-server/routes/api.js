const express=require('express');
const router=express.Router();

router.get('/hello',(req,res,next)=>{
    res.json({msg: 'Hello from the other side'})
});

module.exports=router;