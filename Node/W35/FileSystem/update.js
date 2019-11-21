const fs=require('fs');
const path= require('path')


function Update(data){
    let [name,key,value] =  data
    // let directory = '/home/mahdieh/Desktop/FBW3-Lessons/FBW3-Lessons/Node/W35/FileSystem/mahsa';
    let directory =  path.dirname(__filename)+"/"+name;
    let filename = 'info.json';
    let filepath = path.format({
        dir:directory,
        base:filename
    });
    
    // let  key='job';
    // let value="developer";
    
     data = fs.readFileSync(filepath);
    let info=JSON.parse(data);
    info[key] = value;
    
    fs.writeFile(
        filepath,
        JSON.stringify(info),
        (err)=>{if(err)throw err;console.log('file was upsated.');
    })
}

module.exports = Update;
