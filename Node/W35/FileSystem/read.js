const fs=require('fs');
const path= require('path')

//const filepath=path.join(folderName,'info.json');
function Read(data){
    //let directory = '/home/mahdieh/Desktop/FBW3-Lessons/FBW3-Lessons/Node/W35/FileSystem/mahsa'; 
    let [name] =  data;
    let directory =  path.dirname(__filename)+"/"+name;
    let filename = 'info.json';
   
    let filepath = path.format({
        dir:directory,
        base:filename
    });
    
    console.log(filepath)
    
    fs.readFile(filepath,(err,data)=> {
         if(err)throw err;
         console.log(JSON.parse(data));
    })
}

module.exports = Read;
