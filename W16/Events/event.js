function sayHi(){
    let name=prompt("Hello what is your name?");
    alert('hi '+ name +"!!!!!!");
}

let body=document.getElementsByTagName("body")[0];
function chBGColor(){
    // let body=document.querySelector("body");
    // let body=document.querySelectorAll("body")[0];
    body.style.backgroundColor="purple";

}
function chBg(color){
    body.style.backgroundColor=color;
}
///////////////////////////////////////////
function chImg(){
    let img=document.getElementById("logoImg");
    let random=Math.floor(Math.random()*1000)+1;
    let newSrc="https://picsum.photos/id/"+random+"/300/300";
    img.setAttribute("src",newSrc);
}

function startAuto(){
    let start=setInterval(chImg,1000);
}





////////////////////////////////////////
function chImg2(){
    let img=document.getElementById("logoImg");
    let firstImg="https://picsum.photos/id/993/300/300";
    let secondImg="https://picsum.photos/id/293/300/300";
    if(img.getAttribute("src")==firstImg){
        img.setAttribute("src",secondImg);
    }else{
        img.setAttribute("src",firstImg);
    }
}

//////////////////////////////////////////////

let colors=["red","orange","blue","green","yellow","pink"];
body=document.querySelector('body');
let c=0;
function changeColor(){
    if(c==colors.length){
        c=0;
    }
    if(c<colors.length){
        body.style.background=colors[c];
        c++;
    }
    // for(c=0;c<colors.length;c++){
    //     if(c==colors.length){
    //         c=0;
    //     }
    //     body.style.background=colors[c];
        
    // }
   
}
/////////////////////////////////////
let buttonText=document.getElementById("colors");
c=0;
function changeColor1(){
    if(c==colors.length){
        c=0;
    }
    if(c<colors.length){
        body.style.background=colors[c];
        buttonText.innerText=colors[c];
        buttonText.style.color=colors[c];
        c++;
    }
  
}
//////////////////////////////////////
function showValu(){
    let input=document.getElementById("name");
    alert("you change the text "+input.value);
};


/////////////////////////

let p=document.getElementById("paragraph");
function over(){
    p.textContent="Stope hovering over me !!!";
}

function out(){
    p.textContent="Thank you for leaving me alone";
    p.style.color="green";
    p.style.fontWeight="bold";
}