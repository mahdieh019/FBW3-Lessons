const express=require('express');
const router=express.Router();

//@route  Get api/auth
//@desc   Get logged in user
//@access Private (gives private inf. from user)
router.get('/',(req,res)=>{
    res.send('Get logged in user')
})


//@route  POST api/auth
//@desc   Auth user & get token
//@access Public  (login page)
router.post('/',(req,res)=>{
    res.send('log in user')
})


module.exports=router