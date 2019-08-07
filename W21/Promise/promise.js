// var isMomhappy=true;
// //promise
// var willIGetNewPhone=new Promise(
//     function(resolve,reject){
//         if(isMomhappy){
//             var phone={
//                 brand:"Apple",
//                 color:"black"
//             }
//             resolve(phone);//fulfilled
//         }else{
//             var reason=new Error("Mom is not happy");
//             reject(reason);//reject
//         }
//     }
// );
// //call our promise

// var askMom=function(){
//     willIGetNewPhone
//     .then(function(fulfilled){
//         //ja, you got a new phone
//         console.log(fulfilled);
//     })
//     .catch(function(error){
//         //oops, mom doesn't buy it
//         console.error(error.message);//mom is not happy
//     })
// }
// askMom();


///////////////////////////////////////////////
var isMomHappy = false;
       // Promise
       var willIGetNewPhone = new Promise(
           function (resolve, reject) {
               if (isMomHappy) {
                   var phone = {
                       brand: "Apple",
                       color: "black"
                   }
                   resolve(phone); // fulfilled
               } else {
                   var error = new Error("mom is not happy");
                   reject(error); // reject
               }
           }
       );
       // call our promise
       var askMom = function () {
           willIGetNewPhone
               .then(function (phone) {
                   // yay, you got a new phone
                   console.log(phone); // -> {brand: "Apple",color: "black"}
               })
               .catch(function (error) {
                   // oops, mom doesn't buy it
                   console.log(error.message); // -> 'mom is not happy'
               })
       }
       askMom();