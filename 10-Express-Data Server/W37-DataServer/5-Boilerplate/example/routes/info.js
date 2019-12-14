var express = require('express');
var router = express.Router();
var path=require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' }); // dynamic data using view folder
  res.sendFile(path.join(__dirname,'../public/info.html')); // static data without any view folder

});

module.exports = router;
