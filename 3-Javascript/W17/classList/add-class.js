let myDiv=document.getElementById("bannerMessage");
let btn=document.querySelector("button");
let btn2=document.querySelectorAll("button")[1];


btn.addEventListener("click",function(){
myDiv.classList.add("banner"); // this will keep the old class and new class
btn.classList.add("btn")

 //myDiv.setAttribute("class","banner");// this will delete the old class
// btn.setAttribute("class","btn");
});
btn2.addEventListener("click",function(){
    myDiv.classList.remove("banner");
    btn2.classList.remove("btn")
});