var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//here import the new files
var contactRouter = require('./routes/contact');
var aboutRouter = require('./routes/about');


var app = express();
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// here use app.use toredirect the server
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);




module.exports = app;
