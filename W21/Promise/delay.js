var delay=2000;
var delayIsSmall=new Promise(
  function(resolve,reject){
    if(delay<3000){
        var d="we have a small delay";
        setTimeout(function() {resolve(d)},3000);
       
    
    }else{
      var error=new Error("delay is more than 2000 ms");
       setTimeout(function (){reject(error) },4000);
    }
  }
);

var askDelay=function(){
  delayIsSmall
    .then(function (d){
          console.log(d);
          })
     .catch(function(error){
    console.log(error.message);
  }) 
}
askDelay();
