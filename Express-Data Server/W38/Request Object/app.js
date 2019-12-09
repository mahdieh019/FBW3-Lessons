var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//---------------new-----------------------

// app.get('/:userid',(req,res)=>{
//       res.send(req.params);  // '/:userid'                 http://localhost:3000/211    
//     //res.send('<h1>about page </h1>'); // '/about'        http://localhost:3000/about      
// })


//--------------------------------------------------------------------------

// https://localhost:3000/search?keyword=learn-javascript
// http://localhost:3000/search?keyword=learn-javascript&&class=DCI
// app.get('/search',(req,res)=>{
//     res.send(req.query);     // "learn-javascript"
// });

//------------------------------------------------------------------------

//http://localhost:3000/weather?filter=very-cold


app.get('/weather', (req, res) => {
    res.send(`
   <h2> req.protocol : ${req.protocol} </h2>
   <h2> req.hostname : ${req.hostname} </h2>
   <h2> req.path : ${req.path} </h2>
   <h2> req.originalUrl : ${req.originalUrl} </h2>
   <h2> req.subdomains : ${req.subdomains}    </h2>
    `)
 console.log(req.protocol)     // "https"
 console.log(req.hostname)     // "localhost"
 console.log(req.path)         // "/weather"
 console.log(req.originalUrl)  // "/weather?filter=very-cold"
 console.log(req.subdomains)    // []
})

//-------------------------------------------------------------------------

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
