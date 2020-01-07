const express=require ('express');
const router=express.Router();
const create_db=require('../controllers/create_db');

router.get('/createdb', function(req,res,next){
    let db_name=req.query.db;
    let collection_name=req.query.collection;

    create_db(db_name,collection_name)
    res.send('database and collection created')
})
module.exports=router;