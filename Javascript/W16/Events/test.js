function sayHi(){
    let name=prompt("enter your name: ");
    alert("Hi "+name);
}
// let body=document.getElementsByTagName("body")[0];
// let body=document.querySelector("body");
let body=document.querySelectorAll("body")[0];



//// change the background color using value
function color(){
    body.style.background="pink";
}





//// change the background color using parameter
function getColor(color){
    body.style.background=color;
}
//// change the Image randomly
function changeImg(){
    let img=document.getElementById("image");
    let random= Math.floor(Math.random()*1000)+1;
    let img1="https://picsum.photos/id/"+random+"/300/300";
    img.setAttribute("src",img1);
}


