var x=document.querySelectorAll("P.intro");
document.getElementById("demo").innerHTML='The first paragraph'+x[0].innerHTML;

function myFunction(){
    var x1=document.forms["frm"];
    var text="";
    var i;
    for(i=0;i<x1.length;i++){
        text+=x1.elements[i].value+"<br>";
    }
    document.getElementById("demo1").innerHTML=text;
}

document.getElementById("image").srs="img.jpeg";
document.getElementById("demo").style.color="red";
document.getElementById("demo").style.fontStyle="italic";

function move(){
    var e=document.getElementById("animate");
    var pos=0;
    var id=setInterval(frame,5);
    function frame(){
        if(pos==350){
            clearInterval(id);
        }else{
            pos++;
            e.style.top=pos+"px";
            e.style.left=pos+"px"
        }
    }
}
function changeText(id){
    id.innerHTML="Ooops!";
}
// button first way
function displayDate(){
    document.getElementById("demo1").innerHTML=Date();
}

//second way
document.getElementById("myBTN").onclick= displayDate1;
function displayDate1(){
    document.getElementById("demo2").innerHTML=Date();
}

function fun(){
    var x=document.getElementById("fname");
    x.value=x.value.toUpperCase();
}

function mOver(obj){
    obj.innerHTML="Thank you";
}

function mOut(obj){
    obj.innerHTML="Mouse out"
}
function mDown(obj){
    obj.style.background="yellow";
    obj.innerHTML="release Me";
}
function mUp(obj){
    obj.style.background="green";
    obj.innerHTML="thank you"
}

function on(){
    document.getElementById('myImage').src="on.jpeg";
}
function off(){
    document.getElementById('myImage').src="off.jpeg";
}
function myMessage(){
    alert("Hi Mahsa");
}

function focusMe(x){
    x.style.background="yellow";
}
