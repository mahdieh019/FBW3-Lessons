//------------------------Object---------------------------

let person={
    fname:"Mahsa",
    lname:"Mani",
    age:25,
    hairColor:"black",
    personInfo(){
       return this.fname+" "+this.lname+" "+this.age;
    }
    // personInfo1:function(){
    //             return this.firstName +" "+ this.lastName+" " + this.age;
    //  }
};
console.log(person);
//-------------------------Constructor-------------------------

function User(name,sname,age,hair){
    this.name=name;
    this.sname=sname;
    this.age=age;
    this.hair=hair;
    this.personInfos=function(){
        return this.name+" "+this.sname+" "+this.age;
    }
}

let p = new User("john", "Smith", 60, "braun");
console.log(p.personInfos());

//-------------------------------------------------------------
let Arr=["red","green","blue"];
let arr=new Array("red","green","blue");
console.log(arr);

//-------------------------------------------------------
let car= new Object();
car.name="BMW";
car.color="black";
car.year=1995;
console.log(car.year); //1995
console.log(car); //Object { name: "BMW", color: "black", year: 1995 }

//----------------------------Constructor---------------------------------
function Employee(name,salary,job){
    this.name=name;
    this.salary=salary;
    this.job=job
    this.age=35;
    this.city="hamburg";
    this.info=function(){
        return this.name + " is " + this.age + " years old " + " ,earns " + this.salary + "$ " +
               "and works as " + this.job + " and lives in " + this.city;
    }
}
let e=new Employee("Rania","2000","Web developer");
console.log(e);//Object { name: "Rania", salary: "2000", job: "Web developer", age: 35, city: "hamburg"
console.log(e.info());// Rania is 35 years old  ,earns 2000$ and works as Web developer and lives in hamburg


let emp1 = new Employee("Jack", 5000, "javascript developer");
let emp2 = new Employee("Ralf", 8000, "senior JS Developer");
emp1.job="software developer";
console.log(emp1); //Object { name: "Jack", salary: 5000, job: "software developer", age: 35, city: "hamburg",


let emp3 = new Employee("Steven", 5000, "node js developer");
emp3.city = "Berlin";
console.log(emp3.info());
//Steven is 35 years old  ,earns 5000$ and works as node js developer and lives in Berlin

//------------------------getter && setter---------------------------------------

let student={
    name:"Maria",
    sname:"smith",
    age:23,
    language:"En",
    get lang(){
        return this.language;
    },
    set lang(value){
        this.language=value;
    }
}
console.log(student);//Object { name: "Maria", sname: "smith", age: 23, language: "En", lang: Getter & Setter }
console.log(student.lang);//En
console.log(student.lang="De");//De

//------------------------------------------------------------

class Students{
    constructor(name, age, city, university, language, usd, changeRate){
        this.name = name;
        this.age = age;
        this.city = city;
        this.university = university;
        this.language = language;
        this.bankAccount = usd;
        this.changeMoney = function () {
            return this.bankAccount * changeRate;
        };
        this.studentInfo = function () {
            return this.name + " " + this.age + " live in "+this.city + " and study in "
        + this.university+" and speak "+ this.language+ " and have "+ this.changeMoney()+ " Euro";
        }
    };
    hello(){
        return "hello "+this.name;
    }
 }
 let m=new Students("Manuel",27,"Köln","Köln University","German",1000,1.1);
 alert(m.hello());
 console.log(m.studentInfo());
 document.getElementById("info").innerHTML=m.studentInfo();