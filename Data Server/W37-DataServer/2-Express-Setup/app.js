//npm init
//npm install -g express
//npm install express --save
//nodemon app
const express=require('express');

 const app=express();
// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })

// //routing

// app.get('/about',(req,res)=>{   //http://localhost:5000/about
//     res.send('<h1>About Page </h1>');
//     console.log(req.url);
// })

// //user
// app.get('/users/:name', (req,res)=>{   //http://localhost:5000/users/Mahsa
//     let user=req.params.name;
//     res.send('<h1>'+user+'</h1>');
// })

//----------------------------------------------my code
// app.use(function (req, res, next) {
//     console.log('Time:', Date.now())
//     next()
//   })


//--------------------------
// app.use('/users/:id', function (req, res, next) {
//     console.log('Request Type:', req.params.id);   //Request Type: 3
//     next()
//   })


//-------------------------
// app.use('/users/:id', function (req, res, next) {  //http://localhost:5000/users/3
//     console.log('Request URL:', req.originalUrl)   //Request URL: /users/3
//     next()
//   }, function (req, res, next) {
//     console.log('Request Type:', req.params.id)    //Request Type: 3
//     next()
//   })
  


// app.get('/users/:id', function (req, res, next) {
//     console.log('ID:', req.params.id)
//     next()
//   }, function (req, res, next) {
//     res.send('User Info')
//   })
  
//   // handler for the /user/:id path, which prints the user ID
//   app.get('/users/:id', function (req, res, next) {
//     res.end(req.params.id)
//   })



app.listen(5000,()=>{
    console.log('we are started on port 5000');

})
