const fs=require('fs');
const path= require('path')


 function Update(data){
    let [name,key,value] =  data
    let directory = '/home/mahdieh/Desktop/FBW3-Lessons/FBW3-Lessons/Node/W35/FileSystem/mahsa';
    //let name='mahsa';
    let directory =  path.dirname(__filename)+"/"+name;
    let filename = 'info.json';
    let filepath = path.format({
        dir:directory,
        base:filename
    });
    
    let key='job';
    let value="developer";
    
    let data = fs.readFileSync(filepath);
    let info=JSON.parse(data);//constructing the JavaScript value or object described by the string
    info[key] = value;
    
    fs.writeFile(
        filepath,
        JSON.stringify(info),
        (err)=>{if(err)throw err;console.log('file was updated.');
    })
 }

 module.exports = Update;
