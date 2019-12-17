//const print=require('./stars');
// let args=process.argv.slice(2);
// console.log(args);
// let stars=args[0];
// let header=args[1];
// print(stars,header); 
//------------------------------------------------
// let stars=process.argv[2];
// let header=process.argv[3];
//print(stars,header); 
//************************************************** */
// console.log("*".repeat(stars));
//process.stdout.write("*");

const print=require('./main');

let args=process.argv.slice(2);
console.log(args);
let stars=args[0];
let header=args[1];
print(stars,header); 
