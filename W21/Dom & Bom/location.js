function loadWebsite(){
    window.location.assign("https://www.github.com");
 //   window.location.replace("https://www.google.com");
     window.location.href="https://www.bing.com"
}

let myBtn=document.getElementById("location");
myBtn.addEventListener("click",loadWebsite);

let btn=document.createElement("button");
btn.innerHTML="learn javascript";

btn.addEventListener("click",function(){
    window.location.href="https://www.tutorialrepublic.com/javascript-tutorial";
 });
 //
 document.body.appendChild(btn);

 //redirect the page to bing after 4000 ms
 //document.body.addEventListener("load", setTimeout(loadWebsite,4000));

let back = document.getElementById("back");
let forward = document.getElementById("forward");

back.onclick=function(){
    window.history.back();
 }
 forward.onclick=function(){
     window.history.forward();
 }