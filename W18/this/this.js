let btn=document.getElementById("myBtn");
// let body=document.getElementsByTagName("body")[0];
// btn.addEventListener("click",function(){
// this.style.color="red";
// this.style.background="green";
// this.style.fontSize="1,5em"
// body.style.background="yellow";

// this.parentElement.remove(); //removes the parent(it removes div)

// });

let img=document.getElementById("myImg");
let Btn=document.getElementById("Btn");
// img.animate()


function init(){
    btn.style.left="0px";
    btn.style.top="0px";
    btn.style.position="relative";

    img.style.left="0px";
    img.style.top="0px";
    img.style.position="relative";

}


//button ------------moving 10px to 10px
btn.addEventListener("click",function(){
    this.style.left=parseInt(this.style.left)+10+"px";
    this.style.top=parseInt(this.style.left)+10+"px";
     alert(parseInt(this.style.left));
});


//move image-------------moving 10px to 10px
Btn.addEventListener("click",function(){
    img.style.left=parseInt(img.style.left)+10+"px";

});

var animate;
//image ------moves faster
function moveRight(){
    img.style.left=parseInt(img.style.left)+10+"px";
    animate=setTimeout(moveRight,50);
}

Btn.addEventListener("click",moveRight);


Btn1.addEventListener("click",stop);

// Btn.addEventListener("click",function(){
//     setInterval(moveRight,50);
//     //animationJs();
// });

// stop image
function stop(){
    clearTimeout(animate);
  //  img.style.left='0px';
}





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
