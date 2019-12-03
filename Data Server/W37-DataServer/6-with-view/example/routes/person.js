var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
   res.render('person',{ ID :req.params.id});    //http://localhost:3000/person/romal
});

router.get('/', function(req, res, next) {
    res.render('person',{ ID :"Masha"});    //http://localhost:3000/person/romal
 });
 
module.exports = router;
