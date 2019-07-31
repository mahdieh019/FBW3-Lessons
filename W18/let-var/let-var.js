function start(){
    for(var i=0;i<5;i++){  //let is for block scopes  ....var is for function scope
        console.log(i);
    }
    console.log(i);
}
start();

function start2(){
    for(let i=0; i<5;i++){
        if(true){
            var color="blue"; // var is global  ------ let is local
        }
    }
    console.log(color); //if var , it prints the color-----if let, it shows an error 
}
start2();

const name="joe";  
//name="jack"; ///  we can not change its value.


var myColor="red";
console.log(window.myColor); //red

let age=30;
console.log(window.age); //  undifined


/////////////////////////const object/////////////////////////////////
const car={
    name:"mercedes", 
    color:"black",
    model:"amg",
    year:2019,
    age:9,
    carinfo:function(){
        console.log(this.name+"made in"+this.year);
      }
    };
console.log(car.carinfo());
car.name="BMW";
console.log(car.name);
console.log(car.year);
/////
//car={name:"Fiat",year:"2000"};//invalid assignment to const `car'
//console.log(car);  

//////////////////////
const drink=["water","coffee","milk","tea"];
console.log(drink);
drink[0]="Lemon Juice";
console.log(drink);