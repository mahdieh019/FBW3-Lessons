const fs=require('fs');
const path= require('path');

function Delete(data){
    let [name] =  data
    // let foldername='mahsa';
    let foldername=name;
    let file_path = path.join(path.dirname(__filename),foldername,'info.json')
    let folder_path= path.join(path.dirname(__filename),foldername);
    
    fs.unlinkSync(file_path);
    console.log('file was deleted')
    fs.rmdirSync(folder_path);
    console.log('folder was deleted');

}
module.exports = Delete;
