// creating an object 

let myObj= { name:"John" , age:34, city : "Hamburg" };

let myJson = JSON.stringify(myObj); // converting to json

console.log(myJson);//{"name":"John","age":34,"city":"Hamburg"}

let jsonContent = '{"name":"John" , "age":34 , "city" : "Hamburg", "isMarried":true }';

let obj = JSON.parse(jsonContent); //converting to object 


for (let i  in obj){    
    console.log(obj[i]); // John 34 Hamburg true 
}

let objStudent = { 
  student :[
    {name:"Mansour",age:10},
    {name:"Romal",age:15},
    {name:"Peter",age:20}
    ]
  }

console.log(objStudent.student[1].name); // Romal
let jsonStudent = JSON.stringify(objStudent); //converting to JSON
console.log(jsonStudent);  //{"student":[{"name":"Mansour","age":10},{"name":"Romal","age":15},{"name":"Peter","age":20}]}
console.log(JSON.parse(jsonStudent)); // converting to OBJECT


let myObj1 = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
  };

  for (let i in myObj1.cars){
      console.log(myObj1.cars[i]);// Ford BMW Fiat
  }