let myList=document.getElementById("list");

// alert(myList.firstElementChild.innerHTML); // Water
// alert(myList.lastElementChild.innerHTML); // Tee
 //alert(myList.children[1].innerHTML); //Coffee

let btn=document.getElementById("myBtn");
let btn2=document.getElementById("myBtn2");
let btn3=document.getElementById("clear");
let btn4=document.getElementById("info");
let text="";


btn.onclick=function(){
    // document.getElementById("content").innerHTML=list.children[1].innerHTML;
    //document.querySelector('p').innerHTML=list.children[2].innerHTML;
};
///////////////////////////////btn///////////////////////////////////
btn.addEventListener("click",function(){ 
    let children=document.getElementById("list").children;
    for(let i=0;i<children.length;i++){
      // console.log(children[i].innerHTML);
        document.getElementById("content").innerHTML+=children[i].innerHTML+"<br>";
    }
 });  // the same as pre function code 


 /////////////////////////////btn2//////////////////////////////////////////
let counter=0;
 btn2.addEventListener("click",function(){
    let kids=document.getElementById("list").children;
    if(counter==kids.length){counter=0;}
    document.getElementById("content").innerHTML+=kids[counter].innerHTML;
    counter++;
 });


/////////////////////////////btn3/////////////////////////////////////////////

 btn3.addEventListener("click", function(){
     document.getElementById("content").innerHTML="";
 });
 btn4.addEventListener("click",function(){
    let imgAttr=document.getElementById("myImg").attributes;
    for(i=0;i<imgAttr.length;i++){
        text+=imgAttr[i].name+"="+ imgAttr[i].value+"<br>";
    }
     document.getElementById("imgInfo").innerHTML=text;
 });
 
 
