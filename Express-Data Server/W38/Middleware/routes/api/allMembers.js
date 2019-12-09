const express=require('express');
const router=express.Router();
const members=require('../../members');


// get all the numbers                                
router.get('/', (req,res)=>{
    res.json(members);
});

//get the selected member
router.get('/:id',(req,res)=>{
   
    const found=members.some(member=>member.id===parseInt(req.params.id));

      if(found){
        res.json(members.filter(member=>member.id===parseInt(req.params.id)));

      }else{
          res.status(400).json({ message: `the ${req.params.id} is not found `});
      }

     
            
});

module.exports=router;