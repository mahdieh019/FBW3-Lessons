function sayHello(){
  alert("hello world");
}
function validation(){
  if(3>4){
    return true;
  }else{
    return false;
  }
}
function over(){
  document.write("over");
}
function out(){
  document.write("out");
}

function Warm(){
  alert("This is a warning message");
  document.write("This is a warning message");
}

function confirmation(){
  let val=confirm("Do you want to continue?");//////////////////////////confirm//////////////////////////
  if(val==true){
    document.write("is Ok");
    return true;
  }else{
    document.write("is not ok");
    return false;
  }
}

function getValue(){
let val=prompt("Enter your name: ", "your name here");  /////////////////////prompt////////////////////////
document.write("you have entered: "+ val);

}
function getValue(){
let a,b,c;
a=void (b=5, c=7);
document.write('a= '+a+'b= '+b+'c= '+c);

}

function hi(){
  let book=new Object();
  book.subject="romance";
  book.author="mahsa";
  document.write("Subject: "+book.subject+"<br>"+" Author: "+book.author);
}


function book1(subject,author){
  this.subject=subject;
  this.author=author;
}

let myBook=new book1("romance","mahsa");
document.write("<br>");
document.write("subject of the Book is: "+myBook.subject+"<br>");
document.write("author of the book is: "+myBook.author);


//////////////////////////important///////////

function addPrice(amount){
  this.price=amount;
}
 function book(title, author){
  this.title=title;
  this.author=author;
  this.addPrice=addPrice;
  }
  let newBook=new book("perl","Mahsa");
  newBook.addPrice(100);
  document.write("<br>");
  document.write("title: "+newBook.title);
  document.write("author: "+newBook.author);
  document.write("book price: "+newBook.price);


  //////////////////////////////////////////////////////

function addFee(amount){
  with(this){
    price=amount;
  }
}
function Book(title,author){
  this.title=title;
  this.author=author;
  this.price=0;
  this.addFee=addFee;

}
let MyBook=new Book("Perl","Mahsa");
MyBook.addFee(200);
document.write("<br>"+"<br>");
document.write(MyBook.title +"- "+ MyBook.author+"- "+MyBook.price);
document.write("<br>"+"<br>");

//////////////////////////////array-forEach////////////////////////////
if(!Array.prototype.forEach){
  Array.prototype.forEach=function(fun){
    var len=this.length;
    if(typeof fun!="function")throw new TypeError();

    let thisp=argument[1];
    for(let i=0;i<len;i++){
      if(i  in this)
      fun.call(thisp, this[i],i,this);
    }
  };
}
function printBr(element,index,array){
  document.write(index+ " is "+element+" ."+"<br>");
}
[12,5,8,130,44].forEach(printBr);
/////////////////////////////////////////////

function myFunc(){
  let a=100;
  try{
    alert("the value of a: "+a);
  }catch(e){
    alert("Error:"+ e.description);
  }finally{
    alert("this executes");
  }
}

///////////////////////////////////////
function myfan(){
  let a=100;
  let b=0;
  try{
    if(b==0)throw("divide by zero");
  else{
    let c=a/b;
  }
  }catch(e){
    alert("error:"+ e);
  }
}
//////////////////////////////////////////

  window.onerror=function(){
    alert("an error occured.");
  }

  ////////////////////////////
  // windows.onerror=function(msg,url,line){
  //   alert("Message: "+msg);
  //   alert("url: "+url);
  //   alert("Line number: "+line);
  // }


  ///////////////////////////////
  
var txt="";
var person={
  fname:"John",
  lname:"Doe",
  age:"25"
};
person.nationality="iranian";
var x;
for(x in person){
  txt+=person[x]+" ";
}
delete person.lname;  // undifined
//document.getElementById("demo").innerHTML=txt;
//document.getElementById("demo").innerHTML=person.fname + " "+person.lname+" "+person.nationality;
document.getElementById("demo").innerHTML=person.lname;