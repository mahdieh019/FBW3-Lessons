
//Middleware
const logger=(req,res,next)=>{
    req.hello='Hello from DCI';
    console.log('Middleware is running');
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    req.info=req.get('host');
    next();
}
module.exports=logger;