
/////////Push()////////////
let colors=["orange","pink",'green'];
console.log(colors);
colors.push("blue"); //[ "orange", "pink", "green", "blue" ]
console.log(colors);
//////////pop()/////////////

colors.pop(); // [ "orange", "pink", "green" ]
console.log(colors);
console.log(colors.pop());[ "orange", "pink" ]
console.log(colors);


/////////////shift()////////////
let fruit=["apple","mango","banana","mango"];
console.log(fruit);
fruit.shift(); // remove an element from the first of an array
console.log(fruit); //[ "mango", "banana", "mango" ]

/////////////unshift()////////////////
fruit.unshift("kiwi"); // add an element to the first of an array
console.log(fruit); //[ "kiwi", "mango", "banana", "mango" ]

////////////////indexOf()/////////////////
fruit.indexOf("mango");
console.log(fruit.indexOf("mango")); //it returns back the index of an element
console.log(fruit); //1

////////////////lastIndexOf()/////////////////
//[ "kiwi", "mango", "banana", "mango" ]
console.log(fruit.lastIndexOf("mango"));//it returns back the index of last element
console.log(fruit); //3

/////////////////slice()//////////////////
//[ "kiwi", "mango", "banana", "mango" ]
console.log(fruit.slice(1,3)); // [ "mango", "banana" ]

console.log(fruit.slice()); // it returns back whole of the array's elements
//[ "kiwi", "mango", "banana", "mango" ]


/////////////////splice()///////////////////////////

console.log((fruit.splice(1,3)));// [ "mango", "banana", "mango" ]
// console.log(fruit);

/////////////////forEach loop ////////////////////////
console.log(' ');
let cars=["bmw","audi","bens","fiat"];
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}
console.log('');
cars.forEach(  function(carName){ console.log(carName); }  );

////////////
console.log('');
let num=[1,2,3];
num.forEach(  function(n){ console.log(n); }  );

////////////
console.log('');
num.forEach(function(n){
    n+=10;
    console.log(n);
});

////////////////
console.log('');
let food=["apple","kebab","donner"];
food.forEach( myFood);
function myFood(foodName){
    console.log(foodName);
}

console.log('');
let weekday=["mo","tu","we","th","fr","sa","so"];
weekday.forEach(printDays);
function printDays(item,index){
    console.log(item + " "+ index);
}
console.log('');
function printArrDays(item,index,arr){
// console.log(arr);
console.log(arr[index]);
}
weekday.forEach(printArrDays);