function incr(){
    return 10;
  }
  var res=incr();
  console.log(res);
  
  //////////////////////////////////////////////////
  var n=20;
  function makeCounter(n){
    //var n=10;
    function incr(){
      return n+=1;
    }
    return incr();
  }
  var res=makeCounter();//11 local variable, 5 parameter,21 global 
  console.log(makeCounter(4));
////////////////////////////////////////////////////
 var n=20;
  function makeCounter1(){
   // var n=10;
    function incr(){
      return n+=1;
    }
    return incr();
  }
  
  var res=makeCounter1();//21
  console.log(res);

/////////////////////////////////////////////////////////////
  var x=10;
  function y(x){
    var x=3;
    return function(){
      return x++;
    }
  }
  var a=y(2);
  console.log(a());//3
  console.log(a());//4
  
  ////////////////////////////////////////////
  function makeCounter2(n){
    function incr(m){
      return n+=m;
    }
    return incr;
  }
  var res=makeCounter2(5)(3);//8
  console.log(res);
  ///////////////////////////closures/////// ctrl+ /    ///////////////////////////////////////////
  
  function makeCounter3(){
    var currentValue=1;
    return function (){ 
      return currentValue++;
    }
  }
  var counter1=makeCounter3();
  console.log(counter1());//1
  console.log(counter1());//2
  
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
  
  function makeCounter4(){
    var currentValue=1;
    return function (){ 
      return currentValue++;
    }
  }
  var counts=makeCounter4();
  console.log(counts());//1
  console.log(counts());//2
  counts.currentValue=5;
  
  var counts2=makeCounter4();
  console.log(counts2());//1
  console.log(counts());//3
  
  ///////////////////////////////////////////////////////////
  function makeCounter5(){
  
    function incr(){
        return incr.currentValue++;
    }
    incr.currentValue=1;
    return incr;

  }
  var c=makeCounter5();
  console.log(c.currentValue);//1
  c.currentValue=5;
  console.log(`counter #1:${c()}` );//5
  console.log(`counter #1:${c()}`);//6
  
  var c2=makeCounter5();
  console.log(`counter #1:${c2()}`);//1
  console.log(`counter #1:${c2()}`);//2
  console.log(`counter #1:${c()}`);//7
  
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
console.log(res);//3



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

  ///////////////////
  function z(){
    let p=2;
    return function(){
      return p++;
    };
  }
  console.log(z);
 // console.log(x);
  

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
    console.log(res);//4

    /////////////////////////////////
   


  
  
  
  
  
  
  
  
  
  