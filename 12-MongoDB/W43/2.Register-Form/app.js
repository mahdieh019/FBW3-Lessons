var express = require('express');
var createError = require('http-errors');
var app = express();
const colors = require("colors");
const expressLayouts=require('express-ejs-layouts');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const flash=require('connect-flash');
const session=require('express-session');
const passport=require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// 2. view engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs');
//3. Load env variable
dotenv.config({path:'./config/config.env'});
//4. connect to db
connectDB();
// //5. body parser for posting data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//1.Routes
var index = require('./routes/index');
var users = require('./routes/users');
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 5000);
  res.render('error');
});

module.exports = app;
