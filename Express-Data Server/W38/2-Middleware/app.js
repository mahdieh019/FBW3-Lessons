const express = require('express');
const path=require('path');
const members=require('./members');
//const moment=require('moment');
const logger=require('./middleware/logger');
const app=express();

//***************************************//cut and past to loggers******************************************* */

//our middleware                                     http://localhost:5000/about.html    or       http://localhost:5000/api/members
// const logger=(req,res,next)=>{ 
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
//     next();
// }
app.use(logger);


//Body Parser middleware   (postman)
app.use(express.json());   // it converts string to json
app.use(express.urlencoded({extended:false}));    // it codee the url 







//*************************************//cut and past to allMembers******************************************** */
//get the selected member
// app.get('/api/members/:id',(req,res)=>{
   
//     const found=members.some(member=>member.id===parseInt(req.params.id));

//       if(found){
//         res.json(members.filter(member=>member.id===parseInt(req.params.id)));

//       }else{
//           res.status(400).json({ message: `the ${req.params.id} is not found `});
//       }
           
// })




// const members = [
//     {
//         id:0,
//         name:'john Doe',
//         email:'john@gmail.com',
//         status:'active'
//     },
//     {
//         id:1,
//         name:'Bob Smith',
//         email:'bob@gmail.com',
//         status:'inactive'
//     },
//     {
//         id:2,
//         name:'Susane Jackson',
//         email:'susi@gmail.com',
//         status:'active'
//     }
// ];




//*****************************************************cut and past to allMembers*****************************//
// // get all the numbers                                 http://localhost:5000/api/members
// app.get('/api/members', (req,res)=>{
//     res.json(members);
// })

// -------------------to use url-------------------    http://localhost:5000/about

// app.get('/',(req,res)=>{                                                                     
//     // res.send('<h1> Hello world</h1>');
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })


// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','about.html'));
// })


//--------------set static folder------------------   http://localhost:5000/about.html
app.use(express.static(path.join(__dirname,'public')));

//***********************************************new Parts*********************************** */
//Members API Routes
app.use('/api/members',require('./routes/api/allMembers'))

//******************************************************************************************* */


const PORT=process.env.PORT || 5000;  //process.env.PORT          default port
app.listen(PORT , ()=>{
    console.log(`server start at port ${PORT}`);
});

