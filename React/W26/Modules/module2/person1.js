class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}
function getName(human){
    console.log(`her name is ${human.name}` );

}
function getAge(human){
    console.log(`she is ${human.age} years old`);
}
export {getName,getAge};
export default Person;