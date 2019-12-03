var express = require('express');
var router = express.Router();
let data={
  email:'Mahsa@gmail.com',
  address:'Hamburg',
  phone: '123456789'
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact',data);
});

module.exports = router;
