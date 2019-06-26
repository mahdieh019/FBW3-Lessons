
/////////Push()////////////
let colors=["otange","pink",'green'];
console.log(colors);
colors.push("blue"); //add an element to the end of an array
console.log(colors);


//////////pop()/////////////
console.log(colors);
colors.pop(); // delete the last element in the array
console.log(colors);
console.log(colors.pop());
console.log(colors);


/////////////shift()////////////
let fruit=["apple","mango","banana","mango"];
console.log(fruit);
fruit.shift(); // remove an element from the first of an array
console.log(fruit);

/////////////unshift()////////////////
fruit.unshift("kiwi"); // add an element to the first of an array
console.log(fruit);

////////////////indexOf()/////////////////
fruit.indexOf("mango");
console.log(fruit.indexOf("mango")); //it returns back the index of an element
console.log(fruit);

////////////////lastIndexOf()/////////////////
console.log(fruit.lastIndexOf("mango"));//it returns back the index of last element
console.log(fruit);

/////////////////slice()//////////////////
console.log(fruit.slice(1,3)); //cuts a pices of fruit
console.log(fruit);

console.log(fruit.slice()); // it returns back whole of the array's elements



/////////////////splice()///////////////////////////
console.log(fruit);
console.log((fruit.splice(1,3)));
// console.log(fruit);

/////////////////forEach loop ////////////////////////
console.log('<br>');
let cars=["bmw","audi","bens","fiat"];
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}
console.log('');
cars.forEach(  function(carname){ console.log(carname); }  );

////////////
console.log('');
let num=[1,2,3];
num.forEach(  function(carname){ console.log(carname); }  );

////////////
console.log('');
num.forEach(function(n){
    n=n+10;
    console.log(n);
});

////////////////
// console.log('');
// let food=["apple","kebab","donner"];
// food.forEach( myfood);
// function myfood(foodname){
//     console.log(foodname);
// }

console.log('');
let weekday=["mo","tu","we","th","fr","sa","so"];
weekday.forEach(printdays);
function printdays(item,index){
    console.log(item + " "+ index);
}
console.log('');
function printArrDays(item,index,arr){
// console.log(arr);
console.log(arr[index]);
}
weekday.forEach(printArrDays);