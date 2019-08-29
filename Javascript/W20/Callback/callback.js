
// function doSomething(callback){
//     callback();
//   }
  
//   function sayHi()
//   {
//     alert ("Hi");
//   }
//   doSomething(sayHi);
     
  /////////////////////////////////////////////////////////////////////////
  function createQuote(quote, callback){
    var myQuote="like I always say,"+quote;
    callback(myQuote);
  }
  function logQuote(quote){
    console.log(quote);
  }
  createQuote("eat your vegetables!",  logQuote);
  
   // answer:  like I always say,eat your vegetables! 
  
  //////////////////////////////////////////////////////////////////////////
  function doHomework(subject, callback){
    console.log("Starting my"+ subject);
    callback();
  }
  
  doHomework("Math", function(){
    
      console.log("Finishing my Homework");
  });
  
  // answer: 
  // Starting myMath
  // Finishing my Homework
  
  //////////////////////////////////////////////////////////////////////////
  function serverRequest(query, callback){
    setTimeout(function(){
      var response = query + "full!";
      callback(response);
    },5000);
  }
  
  function getResults(results){
    console.log("Response from the server: " + results);
  }
  
  serverRequest("The glass is half ", getResults);
  
  
  // answer: 
  // Response from the server: The glass is half full!
  