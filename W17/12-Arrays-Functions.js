let colors=["red","blue","green"];
let colors1=["orange","lightblue","pink"];

//-------------------------Array---------------------------

// 1. concat
let allColors=colors.concat(colors1); 
console.log(allColors); //Array(6) [ "red", "blue", "green", "orange", "lightblue", "pink" ]

// 2.slice
console.log(allColors.slice(1,3));// Array [ "blue", "green" ]

//3.