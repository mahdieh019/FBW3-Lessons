let str="Hello World !";

//----------------------------------string-------------------------------

//1. length
console.log(str.length);  // 13
console.log(str[0]);  // H

//2. charAt()
console.log(str.charAt(6));  // W

//3. charCodeAte()
console.log(str.charCodeAt("H")); // 72   Ascii no. 

//4. concat()
let str1="we are learning ";
let str2="javascript";
let str3=str1.concat(str2); 
console.log(str3); //we are learning javascript

//5. indexOf()
console.log("the index of javascript is "+str3.indexOf("javascript")); //16
console.log(str3.indexOf("php")); // it returns -1 why it could not find it

//6. match()
console.log(str1.match("we"));   //  ["we"]  if not match, returns null
console.log(str3.search("le"));  // 7  it returns its index

// difference between search & indexOf
console.log(str3.search("."));   // 0
console.log(str3.indexOf("."));  // -1

//7. slice()
console.log(str3.slice(0,6));   //we are                        it returns part of the string  

//8. startsWith()
let fruit="Apple are round and apples are juicy";
fruit.startsWith("Apple");//true
fruit.startsWith("apple");//false
console.log(fruit);

//9. substr()
console.log(fruit.substr(5,10)); // are round (start, length)

//10. slice()
console.log(fruit.slice(5,10)); //  are  (start,end )

//11. substring()
console.log(fruit.substring(2));// ple are round and apples are juicy (start)
console.log(fruit.substring(2,7));//ple a

//12. toUpperCase()
console.log(fruit.toUpperCase());  //APPLE ARE ROUND AND APPLES ARE JUICY

//13. toLowerCase()
console.log(fruit.toLowerCase()); //apple are round and apples are juicy

//14. trim()
let food="    Doner Apple Kepap banana";
console.log(food);          //     Doner Apple Kepap banana 
console.log(food.trim());   //Doner Apple Kepap banana 

//15. toString()
let colors=["red","green","yellow","gold"];
console.log(colors.toString()); 

//16. parsInt()
console.log(parseInt("8765")); //8765

//17. isInteger()
let num=12;
console.log(Number.isInteger(num)); //true
console.log(Number.isInteger("2345")); // false

//18. Number
console.log(Number("2345")); //2345   converts to number



let text="I can talk in the park all day!";
console.log(text.slice(18,22)); // park

//---------------------------------------exercise ----------------------------------------//

// convert the first alphabet of each word
let a=text.slice(" ");
document.write(a); // I can talk in the park all day!   ( in the Html )

(((text.split(" ")[1])[0])).toUpperCase()

for(let i=0;i<(text.split(" ")).length;i++){

  console.log((((text.split(" ")[i])[0])).toUpperCase());
    }




