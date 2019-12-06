const fs=require('fs');
const path= require('path');

function Create(data){

    const dirname = path.dirname(__filename)
    console.log(dirname);

    let [name,age,hobby] =  data;

    // var info={
    //     name: 'mahsa',
    //     age: 28,
    //     hobby: 'Sports'
    // }

    var info={
        name: name,
        age: age,
        hobby: hobby
    }


    let folderName = dirname + '/' + info.name ;
    
    fs.mkdir(folderName,(err)=>{ 
        if(err)throw err;
        console.log('Folder created.');
    })
    
    const filepath=path.join(folderName,'info.json');
    let content = JSON.stringify(info);  //converts a JavaScript object or value to a JSON string, 
    
    fs.writeFile(filepath,content,(err)=>{
        if(err)throw err;
        console.log('File created.');
    });
    
}

module.exports=Create;
