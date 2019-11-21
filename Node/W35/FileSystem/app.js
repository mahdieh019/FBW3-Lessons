const Create= require('./create');
const Read= require('./read');
const Update= require('./update');
const Delete= require('./delete');

let [action, ...data] = process.argv.splice(2);

switch(action){
    case 'write':
        Create(data);
        break;
    case 'read':
        Read(data);
        break;
    case 'update':
        Update(data);
        break;
    case 'delete':
        Delete(data);
        break;
    default:
        console.log("The action was wrong");
}

