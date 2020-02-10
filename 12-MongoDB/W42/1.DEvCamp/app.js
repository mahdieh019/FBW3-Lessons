const express=require('express');

const dotenv=require('dotenv');
const logger=require('./middleware/logger');
const connectDB=require('./config/db');
const colors=require('colors');
//Load env variable
dotenv.config({path:'./config/config.env'});

//connect to db
connectDB();

const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(logger);

//Route files
const bootcamps=require('./routes/bootcamps');

//Mount routers
app.use('/api/v1/bootcamps',bootcamps);

const PORT=process.env.PORT || 5000;
const server=app.listen(PORT,console.log(`Server Started on port ${PORT} in ${process.env.NODE_ENV}`.bgMagenta));


//handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error:${err.message}`);
    //close Server & exit process
    server.close(()=>process.exit(1));
});
