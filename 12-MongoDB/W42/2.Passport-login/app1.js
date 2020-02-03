const express=require('express');
const mongoose=require('mongoose');
const passport=require('passport');
const flash=require('connect-flash');
const session=require('express-session');
const expressValidator=require('express-validator');
const dotenv=require('dotenv');
const colors=require('colors');
const connectDB=require('./config/db');

//Load env variable
dotenv.config({path:'./config/config.env'});
//connect to db
connectDB();

const app=express();
//EJS view Engine
 app.set('view engine','ejs');

//body parser for posting data
 app.use(express.urlencoded({extended:true}))

 //Express session
 app.use(session({
    secret:"secret",
    resave:true,
    saveUninitialized:true
}));

//connect Flash
app.use(flash());

//Global variables
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    next();
})
//Routes
const index=require('./routes/index');
const users=require('./routes/users');
app.use('/', index);
app. use('/users',users);

//passport Middleware
app.use(passport.initialize());
app.use(passport.session());

const PORT=process.env.PORT || 5005;
const server=app.listen(PORT,console.log(`Server Started on port ${PORT} in ${process.env.NODE_ENV}`.bgMagenta));


//handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error:${err.message}`);
    //close Server & exit process
    server.close(()=>process.exit(1));
});
