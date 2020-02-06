const express=require('express');
const router=express.Router();
const User=require('../models/User')
const {check, validationResult}=require('express-validator')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

//@route  Post api/user
//@desc   Register a user
//@access Public
router.post('/',[
    check('name','name is required').not().isEmpty(),
    check('email','Please enter a valid email').isEmail(),
    check('password','Please enter your password with 6 or more characters').isLength({min:6})
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    //passed
    const {name,email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(user){
            return res.status(400).json({msg:"User already exist"})
        }
        user=new User({
            name,
            email,
            password
        });
        const salt=await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(password,salt);
        await user.save();
        const payload={
            user:{
                id: user.id
            }
        }
        jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:3600
        },(err,token)=>{
            if (err)throw err;
            res.json({token})
        });

    }catch(error){
        console.log(error);
        res.status(500).send('Server Error')
    }

})

module.exports=router