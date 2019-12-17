var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const cors=require('cors');//new
const secure=require('./middleware/access');
const setCors=require('./middleware/access');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(cors(secure))
app.use(setCors);

// app.get(cors({   //new
//     origin:'*',
//     methods:"GET,PUT,POST,DELETE",
//     allowedHeaders:"Origin, X-Requested-With, Content-Type, Accept",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
// }))


app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
