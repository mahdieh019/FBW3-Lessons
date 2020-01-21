const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');

//User model
const User=require('../models/User');
//Login page
router.get('/login',(req,res)=>{
   // res.send('<h1>Welcome to Users Login Page</h1>')
   res.render('login');
})

//Register Page
router.get('/register',(req,res)=>{
   // res.send('<h1>Welcome to Users Register Page</h1>')
   res.render('register');
})

// Rigister Handle
router.post('/register' ,(req , res )=>{
   const { name, email, password, password2 } = req.body;
   let errors = [];

   // checking the required fields
   if(!name || !email || !password || !password2){
       errors.push({ msg: 'please fill in all fields' });
   }
   // cheking passwords match
   if(password !== password2){
      errors.push({ msg: 'Password do not match'});
   }
   // cheking pass lenght
   if(password.length < 6){
      errors.push({msg: "password should at least 6 characters"})
   }

   if(errors.length > 0){      // it will be still in register page 
      res.render('register',{
         errors,
         name,
         email,
         password,
         password2
      });
   }
   else{
     //validation passed 
     User.findOne({email:email})
     .then(data => {
        if(data){
           errors.push({msg: 'Email is already registered'});
           res.render('register',{
              errors,
              name,
              email,
              password,
              password2
           });
        }
        else{
           const newUser=new User({
              name,
              email,
              password
           });
           //Hash Password
           bcrypt.genSalt(10,(err,salt)=>{
              bcrypt.hash(newUser.password,salt,(err,hash)=>{
                 if(err)throw err;
                 // set hashpassword
                 newUser.password=hash;
                 console.log('the hashed pass is: '+newUser.password);
                 //save the user data to our database
                 newUser.save()
                 .then(user =>{
                    req.flash('success_msg','You are registered and you can login');
                    res.redirect('/users/login');
                 })
                 .catch(err=>{
                    console.log(err);
                 });
              })
           })

        }
     });
   }
})


module.exports=router;