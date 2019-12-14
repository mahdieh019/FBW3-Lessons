class Person{
    constructor(name,job,age){
        this.name=name;
        this.job=job;
        this.age=age;
    }
    calculate_age=year=>{
        this.age=2019-year;
    }
}
let person1=new Person;
console.log(person1);
person1.name="Wisam";
person1.job="Web dev";
person1.calculate_age(1990);
console.log(person1);

export default Person;