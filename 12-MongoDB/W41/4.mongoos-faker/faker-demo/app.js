var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//-------------------------------------new------------------
var mongoose=require('mongoose');



//-------------- DB Connection     //new
mongoose.connect("mongodb://localhost:27017/fake-shop", {        // it creates a fake-shop DB
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", function() {
console.log("Database connection established...");
});
//-------------------



//--------------------------------------
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter=require('./routes/products');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

module.exports = app;
