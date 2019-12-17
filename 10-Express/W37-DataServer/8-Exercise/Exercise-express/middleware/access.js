//----------------------with cors------------------- 
//function secure (req, callback){
//     let options = {origin:'*',
//     methods:"GET,PUT,POST,DELETE",
//     allowedHeaders:"Origin, X-Requested-With, Content-Type, Accept"
//     }
//     callback(null,options)

// }

// module.exports=secure;

//-------------------whitout the cors------------------------------

let setCors=(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-header","Origin,x-Requested-With,Content-Type,Accept");
    res.header("Access-Content-Allow-Method","POST, GET,PUT,DELETE,OPTIONS");
    next();
}

module.exports=setCors;