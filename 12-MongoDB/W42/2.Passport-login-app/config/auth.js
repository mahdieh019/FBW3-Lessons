module.exports=function ensureAthenticated(req,res,next){
    if(req.ensureAthenticated()){
        return next();
    }
    req.flash('error_msg', 'Please log in to view the pages');
    res.redirect('/users/login');
}
module.exports=function forwardAuthenticated(req,res,next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/dashboard');
}