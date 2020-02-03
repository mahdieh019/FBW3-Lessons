const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const app=express();
const colors = require("colors")
const connectDB=require('./config/db');
const dotenv=require('dotenv');
const flash=require('connect-flash');
const session=require('express-session');
const passport=require('passport');

//8. passport config
require('./config/passport')(passport) //passport is function here
//2. EJS
app.use(expressLayouts);
app.set('view engine','ejs');
//3. Load env variable
dotenv.config({path:'./config/config.env'});
//4. connect to db
connectDB();
//5. body parser for posting data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//6. Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
//9. passport Middleware
app.use(passport.initialize())
app.use(passport.session());

//7. connect Flash
app.use(flash());


//8. Global variables
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    next();
})


//1. Routes
const index=require('./routes/index');
const users=require('./routes/users');
app.use('/', index);
app.use('/users',users);

const PORT= process.env.PORT || 5000;
app.listen(PORT,console.log(`Server Started on port ${PORT} in ${process.env.NODE_ENV}`.bgMagenta));

