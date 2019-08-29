let h1=document.querySelector("h1");
let body=document.querySelector("body");
let isBlue=false;
body.style.background="lightgreen";

function changeColor(){
    if(isBlue==true){
        body.style.background="white";
    }else{
        body.style.background="lightblue";
    }
    isBlue=!isBlue;
}

 changeColor();
h1.style.color="red";
h1.style.margin="50px";

 setInterval(changeColor,1000);//make something after 1000ms