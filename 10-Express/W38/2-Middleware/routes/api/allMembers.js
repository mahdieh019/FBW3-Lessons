const express=require('express');
const router=express.Router();
const members=require('../../members');
const  uuid=require('uuid');

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


//create member                 (postman)                http://localhost:5000/api/members
router.post('/',(req,res)=>{
  // res.send(req.body);
  const newmember={
    id:uuid.v4(),
    name:req.body.name,
    email:req.body.email,
    status:req.body.status
  }
  //res.send(newmember);
  if(!newmember.name || !newmember.email){
    return res.status(400).json({msg: 'Please include a name and email'})
  }
  members.push(newmember);
  res.json(members);

});

//update a member  (postman)
router.put('/:id',(req,res)=>{
 // const found=members.some(member=>member.id===parseInt(req.params.id));   in case of integer's id
  const found=members.some(member=>member.id==(req.params.id));  // in case of uuid 
  if(found){
    const updMember=req.body;
    members.forEach(member =>{
      //if(member.id===parseInt(req.params.id)){            in case of integer's id
      if(member.id==(req.params.id)){  
        member.name=updMember.name ? updMember.name : member.name;
        member.email=updMember.email ? updMember.email : member.email;
        member.status=updMember.status ? updMember.status : member.status;
        res.json({msg:'Member updated', member})
      }
    })
  }else{
    res.status(404).send({msg: `No member with the id of $`})
  }
})


router.delete('/:id',(req,res)=>{
  const found=members.some(member=>member.id==(req.params.id));  

  if(found){
    members.forEach(member =>{                              // members.forEach((member,index) =>{
      if(member.id==(req.params.id)){ 
        members.splice((members.indexOf(member)),1);        // members.splice((index,1);
        res.json({member});
      } 
    })
  }else{
    res.status(400).send({msg: `No member with the id of $`})
  }

  // another way

  // if(found){
  //   res.json({
  //     msg:'Member deleted',
  //     members:members.filter(member =>{
  //       if(member.id !== parseInt(req.params.id)){
  //         return member;
  //       }
  //     })
  //   })
  // }

})

// router.post('/delete',(req,res)=>{
//   let id=parseInt(req.body.id);
//   db.get('records')
//   .remove({id:id})
//   .write();
//  res.status(200).send('you have removed item ' + id);
// });





module.exports=router;