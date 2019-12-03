const fs=require('fs');

var fileExistPath='./index.html';
var missingFilePath='./404.html'

//how to read file

//read async file
// fs.readFile(fileExistPath,'utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// });
// console.log('this is after file read function');

//sync
// var data=fs.readFileSync(fileExistPath,'utf8');
// console.log(data);
// console.log('this is after file read function');


//async
fs.readFileSync(fileExistPath,'utf8',(err,data)=>{ 
    if(err)throw err;
    console.log(data);
});
console.log('this is after file read function');


//error
// fs.readFile(missingFilePath,'utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// });

