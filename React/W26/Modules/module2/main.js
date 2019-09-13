// import Person,{printName, printAge} from './person.js';
// //import{printName, printAge} from './person.js'


// let person =new Person("Mahsa",25); // import P,{printName, printAge} from './person.js';
//                                     // let person=new P("Mahsa",25);
// console.log(person);
// printName(person);
// printAge(person);

//-------------------------another way----------------------------

// import Person,{printName as pNmae, printAge as pAge} from './person.js';
// pName(person);
// pAge(person);


//to import everything from person.js
import * as p from './person.js.js';
let person=new p.default("Ali",22);
console.log(person);

p.printName(person);
p.printAge(person);

//-------------------------------without any class
// let  obj={
//     name:"Mahdieh",
//     age=20
// };
// p.printAge(obj);

