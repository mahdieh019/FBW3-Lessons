const Bootcamp=require('../models/Bootcamp');

    
// get all the bootcamps without id
exports.getBootcamps = async (req ,res , next) => {
    //res.status(200).json({ success : true , msg : ' Show all bootcamps' , hello:req.hello , host:req.info});
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({success : true , data:bootcamp});
    }
    catch(err){
        res.status(400).json({ success : false })
    }
}
// get  the bootcamp with id
exports.getBootcamp=async(req,res,next)=>{
    //res.status(200).json({success: true, msg: `Show the bootcapm ${req.params.id}`})
    try{
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp){
            res.status(400).json({success: false})
        }
        res.status(200).json({success: true, data:bootcamp})
    }catch(err){
        res.status(400).json({ success : false })

    }
}

exports.createBootcamp=async(req,res,next)=>{    //post
    try{
        const bootcamp=await Bootcamp.create(req.body);

        res.status(201).json({success: true, data:bootcamp})
    }
    catch(err){
        res.status(201).json({success:false , msg:err})
    }
    //console.log(req.body);
  
    
}

exports.updateBootcamp=async(req,res,next)=>{  //put
   // res.status(200).json({success: true, msg: `Update bootcamps  ${req.params.id}`});
    try{
        const bootcamp=await Bootcamp.findByIdAndUpdate(req.params.id,req.body, {
          new:true,
          runValidators:true  
        });
        if(!bootcamp){
            res.status(400).json({success: false});

        }
        res.status(200).json({success:true, data:bootcamp});
    }
    catch(err){
        res.status(400).json({success:false })
    }
}

exports.deleteBootcamp=async(req,res,next)=>{
        //res.status(200).json({success: true, msg: `delete bootcamps  ${req.params.id}`})

    try{
        const bootcamp=await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamp){
          return  res.status(400).json({success:false , msg: `${req.params.id} is not found`  });
        }
        res.status(200).json({success:true , msg:`the element ${req.params.id} is deleted`})
    }
    catch(err){
        res.status(400).json({success:false})
    }
}