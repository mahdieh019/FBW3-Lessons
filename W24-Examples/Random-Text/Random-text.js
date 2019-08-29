let main=document.getElementById("main");
let txt=document.getElementById("text");
let btn=document.getElementById("btn");

function randomText(){
    let arr=["I like Js", "I like JQuery", "I like DCI"];
    let index=Math.floor(Math.random()* arr.length );
    txt.textContent=arr[index];
    txt.style.fontSize="15px";
    txt.style.color=changeColor();
    text.style.background=changeColor();
}

btn.addEventListener("click", randomText);

function changeColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let x="rgb(" + r + "," + g + "," + b + ")";
    return (x);
   
  }