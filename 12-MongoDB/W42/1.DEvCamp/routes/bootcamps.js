const express= require('express');
const router=express.Router();
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp

    }=require('../controllers/bootcamps');

router
.route('/')
.get(getBootcamps)
.post(createBootcamp);

router
.route('/:id')
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp);



 
// router.get('/', (req,res)=>{
//     res.status(200).json({success: true, msg: 'Show all bootcapms'})
// });

// router.get('/:id', (req,res)=>{
//     res.status(200).json({success: true, msg: `Show the bootcapm ${req.params.id}`})
// });

// router.post('/', (req,res)=>{
//     res.status(200).json({success: true, msg: `Create new bootcamps`});
// });

// router.put('/:id', (req,res)=>{
//     res.status(200).json({success: true, msg: `Update bootcamps  ${req.params.id}`});
// });

// router.delete('/:id', (req,res)=>{
//     res.status(200).json({success: true, msg: `delete bootcamps  ${req.params.id}`})
// });

module.exports=router;