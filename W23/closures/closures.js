function incr(){
    return 10;
  }
  var res=incr();
  console.log(res);
  
  //////////////////////////////////////////////////
//   var n=20;
//   function makeCounter(n){
//     var n=10;
//     function incr(){
//       return n+=1;
//     }
//     return incr();
//   }
//   var res=makeCounter(4);//5
//   console.log(res);
  ////////////////////////////////////////////////
//   var n=20;
//   function makeCounter(){
//     //var n=10;
//     function incr(){
//       return n+=1;
//     }
//     return incr();
//   }
  
//   var res=makeCounter();//21
//   console.log(res);
  ////////////////////////////////////////////
//   function makeCounter(n){
//     function incr(m){
//       return n+=m;
//     }
//     return incr;
//   }
//   var res=makeCounter(5)(3);//8
//   console.log(res);
  ///////////////////////////closures/////// ctrl+ /    ///////////////////////////////////////////
  
//   function makeCounter(){
//     var currentValue=1;
//     return function (){ 
//       return currentValue++;
//     }
//   }
//   var counter=makeCounter();
//   console.log(counter());//1
//   console.log(counter());//2
  
  /////////////////////////////////////////////////////
  function Mult(){
    var n=2;
    return function(){
      return n*=2;
    }
  }
  
  var c=Mult();
  console.log(c());
  console.log(c());
  console.log(c());
  console.log(c());
  
  ///////////////////////////////////////////////////////////
  
//   function makeCounter(){
//     var currentValue=1;
//     return function (){ 
//       return currentValue++;
//     }
//   }
//   var counter=makeCounter();
//   console.log(counter());//1
//   console.log(counter());//2
// counter.currentValue=5;
  
//   var counter2=makeCounter();
//   console.log(counter2());//1
//   console.log(counter());//3
  
  ///////////////////////////////////////////////////////////
//   function makeCounter(){
  
//     function incr(){
//         return incr.currentValue++;
//     }
//     incr.currentValue=1;
//     return incr;

//   }
//   var counter=makeCounter();
//   counter.currentValue=5;
//   console.log(`counter #1:${counter()}` );//5
//   console.log(`counter #1:${counter()}`);//6
  
  
//   var counter2=makeCounter();
//   console.log(`counter #1:${counter2()}`);//1
//   console.log(`counter #1:${counter()}`);//7
  
  ////////////////////////////////////////////////////////////
  function mult(){

    function inc(){
      return inc.n++;
    }
    inc.n=2;
    return inc;
  }
  
  var c = mult();
  c.n=3;
  console.log(c());//3
  console.log(c());//4
//////////////////////////////////////////////////////
function main() {
  function func1() {
      return 1;
  }
  function func2() {
      return 2 + func1();
  }
  var out = func2();
  return out;
}
var res = main();
console.log(res);



  ////////////////////////////Exe 1////////////////////////////

  
//   function makeCounter() {
//     let count = 0;

//         return function() {
//             return count++;
//         };
//     }

//     let counter = makeCounter();
//     let counter2 = makeCounter();

//     console.log( counter() ); // 0
//     console.log( counter() ); // 1

//     console.log( counter2() ); // 0
//     console.log( counter2() ); // 1
    ///////////////////////////Exe 2////////////////////////////
    function Counter() {
        let count = 0;
        
        this.up = function() {
            return ++count;
        };
        this.down = function() {
            return --count;
        };
    }
        
        let counter = new Counter();
        
        console.log( counter.up() ); // 1
        console.log( counter.up() ); // 2
        console.log( counter.down() ); //1

    /////////////////////////Exe 3///////////////////////////////

    function sum(a){
        function inc(b){
            return a+=b;
        }
        return inc;
    }
    var res=sum(5)(-1);
    console.log(res);

    /////////////////////////////////
    function mult(){

        function inc(){
          return inc.n++;
        }
        inc.n=2;
        return inc;
      }
      
      var c = mult();
      c.n=3;
      console.log(c());//3
      console.log(c());//4
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  