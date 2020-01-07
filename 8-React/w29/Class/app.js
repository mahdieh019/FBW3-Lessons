import Person from './main.js'

class DciStudent extends Person{
    constructor(name,job,age){
        super(name,job,age);
    }
}
let person2=new DciStudent("mahsa","DCI Student", "28");
console.log(person2);