let colors=["red","blue","green"];
let colors1=["orange","lightblue","pink"];

//-------------------------Array---------------------------

// 1. concat
let allColors=colors.concat(colors1); 
console.log(allColors); //Array(6) [ "red", "blue", "green", "orange", "lightblue", "pink" ]

// 2.slice
console.log(allColors.slice(1,3));// Array [ "blue", "green" ]

// 3.splice
let cars=["bmw","ford","fiat"];
console.log(cars);
// cars.splice(0,2,"mercedes","audi",);  Array(3) [ "mercedes", "audi", "fiat" ]
// cars.splice(1,1,"mercedes","audi",);  Array(4) [ "bmw", "mercedes", "audi", "fiat" ]
cars.splice(1,0,"mercedes","audi",); // Array(5) [ "bmw", "mercedes", "audi", "ford", "fiat" ]
console.log(cars.push("white")); 
console.log(cars);

// 4. find
let food=["banana","mango","apple"];
function check(foodName){
    return foodName=="apple";
}
console.log(food.find(check));  //it returns apple if in the array, we have apple otherwise returns undifined 


// 5. object as element
let person=[{name:"Anna",work:"doctor"},
            {name:"David", work:"web developer"},
            {name:"Eric", work:"Hair Dresser"},
            {name:"Mansour", work:"web developer"}];


function isWebDeveloper(employee){
    return employee.work=="web developer";
}
console.log(person.find(isWebDeveloper).name); //David
console.log(person.find(isWebDeveloper)); // { name: "David", work: "web developer" }

// 6. findIndex()
console.log("the index of apple is "+food.findIndex(check)); // 2 (apple)
console.log(person.findIndex(isWebDeveloper));   // 1   (David)

// 7. reverse()
// console.log(food.reverse());            //[ "apple", "mango", "banana" ]
console.log(+food.reverse().findIndex(check));   // 0 
console.log(person.reverse().findIndex(isWebDeveloper));  // 0  (Mansour)

// 8. filter
let age=[15,18,30,55,60,13,22];
function canDrive(driverAge){
    return (driverAge >=18 && driverAge<=70);
}
console.log(age.filter(canDrive));  // [ 18, 30, 55, 60, 22 ]

// 9. sort()
let a=age.filter(canDrive);
console.log(a.sort());  /// [ 18, 22, 30, 55, 60 ]

// 10. reduce()
let cities=[{city:"Hamburg",population:1000000},
            {city:"Berlin",population:2000000},
            {city:"Stuttgart",population:700000}];

function sumOfPopulation(total,num){
    return total+num.population;
 }
 let allpopulation=cities.reduce(sumOfPopulation,0);
 console.log(allpopulation);  // 3700000
//------
let numbers=[8,2,10,20];
function sumNumbers(total,num){
    return total+num;
}
let newArray=numbers.reduce(sumNumbers);
console.log(newArray);

// --------
let name=["Alice","Bob","John","Carl","Bob"];
 
function countNames(allNames,name){
    if(name in allNames){
        allNames[name]++;
    }else{
        allNames[name]=1;
    }
    return allNames;
}
let result=name.reduce(countNames,{});
console.log(result);  //Object { Alice: 1, Bob: 2, John: 1, Carl: 1 }

// 11. map
let arr=[2,4,8,10];

function multi(number){        // normal way
    return number * 2;
}
let newArr=arr.map(multi);
console.log(newArr);  //Array(4) [ 4, 8, 16, 20 ]


// 12. Arrow Functions


// let multi=function(number){return number*2;}
// let multi=(number)=>{ return number*2; }  // with parameter
// let multi=number=>{ return number*2; }    // only one parameter
// let multi=number=>number *2;              // only one parameter


// let callMe=()=> {console.log("Hello");}  //no parameter
// let newArr=arr.map(number=>number*2); // the shortest way


var materials=['Hydrogen','Helium','Lithium','Beryllium'];
function matLength(material){
    return material.length;
}
console.log(materials.map(matLength)); // Array(4) [ 8, 6, 7, 9 ]
