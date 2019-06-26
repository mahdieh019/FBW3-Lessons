// document.getElementById("demo").innerHTML="my first javascript";
// document.write(5+6);
// function myFunction(){
//     document.getElementById("demo1").innerHTML="hallo";
//     document.getElementById("demo2").innerHTML="hallo";
  
// }

/////////////////////////////
// var x=5;
// var z=x+6;
// document.getElementById("demo2").innerHTML=z;

////////////////////////
// document.getElementById("demo").innerHTML="hallo Mahsa!"+" "+"it is me";
////////////////////////////// 
// el=[null,"audi","benz"];
// document.getElementById("demo").innerHTML=el[0];
// document.write(typeof(el[0]));
/////////////////////////////////
var person={
    Fname:"mahsa",
    Lname:"Nasr",
    age:25,
    fullname:function(){
      return  this.Fname+" "+this.Lname;
    }
};
// document.getElementById("demo").innerHTML=person.fullname();
// document.write(person.fullname());
// var person1={
//     fname:"hi",
//     lname:"how are you",
//     fulln:function(){
//         return this.fname+" "+this.lname;
//     }
// };
// document.write(person1.fulln());
// document.getElementById("demo").innerHTML=person1.fulln();
// function displayDate(){
//     document.getElementById('demo').innerHTML=Date();
// }
// var txt="hkjdhfsghiokjutogh;ijogfhju";
// document.getElementById('demo1').innerHTML=txt.length;


var z="john";
var y=new String("john");
document.getElementById("demo2").innerHTML=typeof z +" "+ typeof y;
document.getElementById("demo2").innerHTML=(z==y);

var str="please locate ";
var pos=str.indexOf("locate");
document.getElementById("demo2").innerHTML=pos;