const fs=require('fs');

var fileExistPath='./index.html';
var missingFilePath='./404.html'

//how to read file


//sync
var data=fs.readFileSync(fileExistPath,'utf8');
console.log(data);
console.log('this is after file read function');


//async

// var data=fs.readFileSync(fileExistPath,'utf8',(err,data)=>{ 
//     if(err)throw err;
//     console.log(data);
// });
// console.log('this is after file read function');


// fs.readFile(missingFilePath,'utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// });