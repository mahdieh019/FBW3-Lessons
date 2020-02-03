const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const passport=require('passport');
const { body ,check, validationResult } = require('express-validator');  // validator

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

//Register Handle--------new version using validator
const verifyPasswordMatch=(req,res,next)=>{
   const {password2}=req.body 
   return check('password')
      .islength({min:6})
      .withMessage('password must be at least 4 characters')
      .equqls(password2)
}
router.post('/register', [
   // our checks here
   check('name').trim().not().isEmpty().withMessage('name is empty'),
   check('email').trim().isEmail().withMessage('email incorrect'),
   check('password').isLength({ min: 6 }).withMessage('password is too short'),
   // check('password2').equals('password').withMessage('passwords are not equal')
   // verifyPasswordsMatch,
   body('password').custom((value, { req }) => {
       if (value !== req.body.password2) {
         throw new Error('Password confirmation does not match password');
       }
       // Indicates the success of this synchronous custom validator
       return true;
     }),
], (req, res) => {
   const { name, email, password, password2 } = req.body;

   console.log(req.body);
   // if there are errors ?
   const check_errors = validationResult(req);
   let errors=[];
   
   if (!check_errors.isEmpty()) {
    //    return res.status(422).json({ errors: check_errors.array() });
        check_errors.array().forEach(item=>{
        errors.push(item);
    });
    console.log('errors : ',errors);
       if(errors.length > 0){
        res.render('register' , {
            errors,
            name,
            email,
            password,
            password2
        })
   } 
}
  else {
      // validation passed
      let errors = [];
      User.findOne({email :email })
      .then(data => {
          if(data){ // we found the email in our database
              errors.push({ msg : ' Email is already registered'});
              res.render('register' ,{ 
                  errors,
                  name,
                  email,
                  password,
                  password2
              })               
          }
          else {
              const newUser = new User({
                  name,
                  email,
                  password
              });

              // Hash Password
              bcrypt.genSalt(10 ,(err , salt) => {
                  bcrypt.hash(newUser.password ,salt , (err , hash) => {
                      if(err) throw err ;

                      // set hashed password
                      newUser.password = hash ;
                      console.log('the hashed pass is : ' + newUser.password);
                      // save the user data to our database
                      newUser.save()
                      .then(user => {
                          req.flash('success_msg', 'You are registered and you can login')
                          res.redirect('/users/login');

                      })
                      .catch(err =>{ console.log(err);
                      });
                  } )
              })
          }
      });
  }
});
//-------
// body('email').custom(value => {
//    return User.findOne({email: value}).then((user)=> {
//       if(user) throw new Error('this email is already in use');
//    })
// }),
//---------------------------------




   

//Register Handle--------new version using validator
// const verifyPasswordMatch=(req,res,next)=>{
//    const {password2}=req.body 
//    return check('password')
//       .islength({min:6})
//       .withMessage('password must be at least 4 characters')
//       .equqls(password2)
// }

// router.post('/register', [
//    // our checks here
//    check('name').trim().not().isEmpty().withMessage('name is empty'),
//    check('email').trim().normalizeEmail().isEmail().withMessage('email incorrect'),
//    check('password').isLength({ min: 6 }).withMessage('password is to short'),

//-------------------------------my code----------------
//    body('email').custom(value => {
//       return User.findOne({email: value}).then((user)=> {
//          if(user) throw new Error('this email is already in use');
//       })
//    }),
//---------------------------------------------------
//    body('password').custom((value, { req }) => {
//        if (value !== req.body.password2) {
//          throw new Error('Password confirmation does not match password');
//        }
//        // Indicates the success of this synchronous custom validator
//        return true;
//      })


// ], (req, res) => {
//    console.log(req.body);
//    // if there are errors ?
//    const errors = validationResult(req);
//    if (!errors.isEmpty()) {
//        return res.status(422).json({ errors: errors.array() });
//    }
//    // if not then create a user
//    const { name, email, password, password2 } = req.body;
//    const newUser = new User({
//        name,
//        email,
//        password});
//    newUser.save().then(() => {
//                        req.flash('success_msg', 'You are registered and you can login')
//                        res.redirect('/users/login');
//                    })
//                    .catch(err =>{ console.log(err);
//                    });
//    return res.status(200).send('ok');
//    // req.flash('success_msg', 'You are registered and you can login');
//    // res.redirect('/users/login');
// });




//-----------------------------------
//------------------------------------







// Rigister Handle--------old version
// router.post('/register' ,(req , res )=>{
//    const { name, email, password, password2 } = req.body;
//    let errors = [];

//    // checking the required fields
//    if(!name || !email || !password || !password2){
//        errors.push({ msg: 'please fill in all fields' });
//    }
//    // cheking passwords match
//    if(password !== password2){
//       errors.push({ msg: 'Password do not match'});
//    }
//    // cheking pass lenght
//    if(password.length < 6){
//       errors.push({msg: "password should at least 6 characters"})
//    }

//    if(errors.length > 0){      // it will be still in register page 
//       res.render('register',{
//          errors,
//          name,
//          email,
//          password,
//          password2
//       });
//    }
//    else{
//      //validation passed 
//      User.findOne({email:email})
//      .then(data => {
//         if(data){
//            errors.push({msg: 'Email is already registered'});
//            res.render('register',{
//               errors,
//               name,
//               email,
//               password,
//               password2
//            });
//         }
//         else{
//            const newUser=new User({
//               name,
//               email,
//               passwordhttps://github.com/validatorjs/validator.js#sanitizers(10,(err,salt)=>{
//               bcrypt.hash(newUser.password,salt,(err,hash)=>{
//                  if(err)throw err;
//                  // set hashpassword
//                  newUser.password=hash;
//                  console.log('the hashed pass is: '+newUser.password);
//                  //save the user data to our database
//                  newUser.save()
//                  .then(user =>{
//                     req.flash('success_msg','You are registered and you can login');
//                     res.redirect('/users/login');
//                  })
//                  .catch(err=>{
//                     console.log(err);
//                  });
//               })
//            })

//         }
//      });
//    }
// })


//login Handle  http://www.passportjs.org/docs/username-password/
router.post('/login',(req,res,next)=>{
   passport.authenticate('local',{
      successRedirect:'/dashboard',
      failureRedirect:'/users/login',
      failureFlash: true
   })(req,res,next)
})

// logout Handle 
router.get('/logout', (req , res ) =>{
   req.logout();
   req.flash('success_msg' , 'You are logged out ');
   res.redirect('/users/login');

})

module.exports=router;