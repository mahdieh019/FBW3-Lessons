let myDiv=document.getElementById("bannerMessage");
let btn=document.querySelector("button");
let btn2=document.querySelectorAll("button")[1];

btn.addEventListener("click",function(){
myDiv.classList.add("banner");
// btn.classList.add("btn");
});

btn2.addEventListener("click",function(){
myDiv.classList.remove("banner");
btn2.classList.remove("btn");
});