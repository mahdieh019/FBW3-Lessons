const greet=function(msg){
    console.log(msg);
}

let person={
    name:'Peter',
    job:'node js developer'
}

message='Hello from the other side';

greet('good morning');
module.exports=greet;
module.exports.peter=person; //named export
module.exports.hello=message;




