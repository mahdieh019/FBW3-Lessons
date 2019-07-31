let b1=document.getElementById("BTN");
let body=document.getElementsByTagName("body")[0];

// b1.addEventListener("click",function(){
//     this.style.background="red";
//     this.style.color="black";
//     this.style.fontSize="2.5em";
//     body.style.background="green";
//     this.parentElement.remove(); removes the parent div
// });

let b2=document.getElementById("m");
let img=document.getElementById("myImg");
//img.animate();

 function init(){
    b1.style.left="0px";
    b1.style.top="0px";
    b1.style.position="relative";

    myImg.style.left="0px";
    myImg.style.top="0px";
    myImg.style.position="relative";

 }

//moving Button
b1.addEventListener("click",function(){
    this.style.left=parseInt(this.style.left)+10+"px";
    this.style.top=parseInt(this.style.top)+10+"px";
    alert(parseInt(this.style.left));
});


//moving img 10px
b2.addEventListener("click",function(){
    img.style.left=parseInt(img.style.left)+10+"px";
});

//moving img faster
var animate;
function moveRight(){
    img.style.left=parseInt(img.style.left)+10+"px";
    animate=setTimeout(moveRight,50);
}
b2.addEventListener("click",moveRight);

//stop img
let b3=document.getElementById("s");
b3.addEventListener("click",stop);

function stop(){
    clearTimeout(animate);
  //  img.style.left=0;  image returns back to position 0
};

//squer
let b4=document.getElementById("i");
b4.addEventListener("click",function(){
    animationJs();
});


function animationJs(){
    document.getElementById("myImg").animate([
        {transform: 'translateX(0px)'},
        {transform: 'translate(300px,0px)'},
        {transform: 'translate(300px,300px)'},
        {transform: 'translate(0px,300px)'},
        {transform: 'translate(0px,0px)'}
    ],{duration:2000,iterations:Infinity}
    );
}

window.onload=init();