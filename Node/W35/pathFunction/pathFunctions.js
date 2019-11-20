const path=require('path');

exports.getConstants= function (){
    console.log("__filename: "+__filename);
    console.log("__dirname: "+__dirname);
}

// exports.getBaseName= function (){
//     let BasePath=path.basename(__filename);
//     console.log("basename: "+BasePath);
// }

// exports.getDirName=function(){
//     let DirName=path.dirname(__filename);
//     console.log("dirname: " +DirName);
// }


exports.getBaseName= function (file){
    let BasePath=path.basename(file);
    console.log("basename: "+BasePath);
}

exports.getDirName=function(file){
    let DirName=path.dirname(file);
    console.log("dirname: " +DirName);
}

exports.getExtName=function(file){
    let ExtName=path.extname(file);
    console.log("extname: " +ExtName);
}