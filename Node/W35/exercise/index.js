const print=require('./stars');
let args=process.argv.slice(2);
console.log(args);
let stars=args[0];
let header=args[1];
print(stars,header); 

print(process.argv[2],process.argv[3]); 
 console.log("*".repeat(stars));
process.stdout.write("*");

    


