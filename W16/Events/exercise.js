let text1=document.getElementById("divToStyle");
function changeToBold(){
    text1.style.fontWeight="bold";
}

// function changeToItalic(){
//     text1.style.fontStyle="italic";
// }
function changeFont(){
    text1.style.fontFamily="Verdana,'sans serif'";
}
function changeColor(f){
    text1.style.color=f;
}
function textSize(f){
    text1.style.fontSize=f;
}

let btn=document.querySelectorAll("button");
btn[0].addEventListener("click",changeToBold);
// btn[1].addEventListener("click",changeToItalic);
btn[1].addEventListener("click",function(){text1.style.fontStyle="italic";})
btn[2].addEventListener("click",changeFont);
btn[3].addEventListener("click",function(){text1.style.fontFamily="areal";}); 

btn[4].addEventListener("click",function (){changeColor("red")});
btn[5].addEventListener("click",function (){changeColor("green")});
btn[6].addEventListener("click",function (){changeColor("black")});

btn[7].addEventListener("click",function (){textSize("0.8em")}); //small
btn[8].addEventListener("click",function (){textSize("1.2em")}); //normal
btn[9].addEventListener("click",function (){textSize("1.5em")}); //big

btn[0].addEventListener("mouseover",function(){
    btn[0].style.fontWeight="bold";
});

