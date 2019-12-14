// function countdownRec(n){
//     if(n>=0){
//         console.log(n);
//         return countdownRec(n-1);
//     }
// }

// countdownRec(10);

// function countdown(n){
//     while(n>=0){
//         console.log(n);
//         n--;
//     }
// }

//////////////////////calculate time//////////////////




// function sum(n){
//     let s=0;
//     for(i=0;i<=n;i++){
//         s+=i;
//     }
//     return s;
// }
// console.log(sum(10));

/////////////////////////


// function sum1(n){
//     if(n == 1) return 1;
//     return n + sum1(n-1);
// }
// console.log(sum1(2));

///////////facto////////////////
// function fact(n){
//     if(n==1 || n==0){
//         return 1;
//     }else{
//         return n*fact(n-1);
//     }
    
// }
// console.log(fact(10));
///////////////////////////////

// function fib(n){
//     if(n==1 ||n==2){
//         return 1;
//     }else if(n>=3){
//         return fib(n-1)+fib(n-2);
//     }
        
// }

// console.log(fib(10));


/////////////////////////////////////////////
function fact(n) {
    var prod = 1;
    while (n >= 1) {
        prod *= n;
     //   console.log(prod);
        n--;
    }
    return prod;
}
//console.log(fact(10));
////////////////////////////////////////////////////

var NMax=200;
console.time('fact');
fact(100);
console.timeEnd('fact');
