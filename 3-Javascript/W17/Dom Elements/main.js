//accesskey

document.getElementById("link").accessKey="g"; // using Alt+shift+g (in firefox) we could open the link 
let aKey=document.getElementById("link").accessKey;
console.log(aKey); //g

//--------------------------------------addEventListener()--------------------------------------  
// Hide Image
let hideImg=document.querySelectorAll("button")[0].addEventListener("click",function(){
    document.querySelector("img").style.display="none";
});

//using arrow function
// let htmlLink=document.querySelector("button").addEventListener("click",()=>{
//     document.querySelector("img").style.display="none";
// });

// show Image
let showImg=document.querySelectorAll("button")[1].addEventListener("click",function(){
    document.querySelector("img").style.display="block";
});

//show-hide Image
let hideShow=document.querySelectorAll("button")[2].addEventListener("click",function(){
    if(document.querySelector("img").style.display=="none"){
        document.querySelector("img").style.display="block";
    }else{
        document.querySelector("img").style.display="none";
    }
});

//change the background color randomly
let btn=document.getElementById("myBtn");                                   // btn.addEventListener("click",function(){ 
btn.addEventListener("click",function(){                                    // let children=document.getElementById("list").children;
    document.querySelector("body").style.background=getRandomColor();       // for(let i=0;i<children.length;i++){
});                                                                         // document.getElementById("content").innerHTML+=children[i].innerHTML+"<br>";   }
                                                                            
function getRandomColor(){
    let letters="0123456789ABCDEF";//  });  // the same as pre function code 
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}



//window.addEventListener()
window.addEventListener("resize",function(){
    document.querySelector("body").style.background=getRandomColor();
});

window.addEventListener("resize",function(){
    let w=window.innerWidth;
    let h=window.innerHeight;
    document.getElementById("size").innerHTML="width: "+w+" Height: "+h;
});


