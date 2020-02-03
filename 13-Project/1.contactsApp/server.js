const express=require('express');
const app=express();
const colors=require('colors');
const dotenv=require('dotenv');
const connectDB=require('./config/db');


//2.load env variable
dotenv.config({path:'./config/config.env'})
//3.Connect to MongoDB database
connectDB();
//4.Initialize Middleware
app.use(express.json({msg: 'welcome '})) // POst             http://localhost:5002/api/users





app.get('/',(req,res)=>{
    res.json({msg:'welcome to contact app api'})
})

//1.Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));


const PORT=process.env.PORT || 5002;
app.listen(PORT , ()=>console.log(`Server started on port ${PORT}`.magenta.underline.bold ))

