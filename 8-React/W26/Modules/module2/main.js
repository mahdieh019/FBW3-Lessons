// import Person,{printName, printAge} from './person.js';  
// let person =new Person("Mahsa",25);                      
// console.log(person);
// printName(person);
// printAge(person);

//----------another way-------------

// import Person,{printName as pName, printAge as pAge} from './person.js';
// let person =new Person("Mahsa",25);   
// pName(person);
// pAge(person);

//------------------import everything from person.js-----------------

import * as p from './person.js';             
let person=new p.default("Ali",22);
console.log(person);

p.printName(person);
p.printAge(person);

//-------------------------------without any class------------------------------

// import * as p from './person.js';   
// let  obj={
//     name:"Mahdieh",
//     age:20
// };
// p.printAge(obj);

