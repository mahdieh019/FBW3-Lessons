let str="Hello World !";
console.log(str.length);
console.log(str[0]);

alert(str.charAt(6));
console.log(str.charCodeAt(H)); // it returns back the ascii number 72

let str1="we are. learning";
let str2="javascript";
let str3=str1.concat(str2); 
console.log(str3);
console.log("the index of javascript is "+str3.indexOf("javascript")); //16
console.log(str3.indexOf("php")); // it returns -1
console.log(str1.match("we"));

console.log(str3.search("le"));
console.log(str3.search("."));
console.log(str3.indexOf("."));

console.log(str3.slice(0,6));   // it returns part of the string
let fruit="Apple are round and apples are juicy";
fruit.startsWith("Apple");//true
fruit.startsWith("apple");//false
console.log(fruit);
console.log(fruit.substr(5,10));
console.log(fruit.slice(5,10));
console.log(fruit.substring(2));// to the end of the string
console.log(fruit.substring(2,7));//ple a
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());

let food="    Doner Apple Kepap banana";
console.log(fruit);
console.log(fruit.trim());

let colors=["red","green","yellow","gold"];
console.log(colors.toString(76));
console.log(parseInt("8765"));
console.log(Number.isInteger(num));
console.log(Number("2345"));
console.log(Number.isNun("2345"));
let text="I can talk in the park all day!";
// console.log(text.slice(18,22));
let a=text.slice(" ");
document.write(a);

(((text.split(" ")[1])[0])).toUpperCase()

for(let i=0;i<(text.split(" ")).length;i++){

  console.log((((text.split(" ")[i])[0])).toUpperCase());
    }