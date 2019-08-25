
// let imgTag=document.getElementById("dragImg");
// let dropDiv=document.querySelectorAll(".dragdrop");
// imgTag.addEventListener("dragstart",start);

// for( div of dropDiv) {

//   div.addEventListener("dragover",dragOver);  
//   div.addEventListener("dragenter",enter);
//   div.addEventListener("dragleave",leave);
//   div.addEventListener("drop",drop);
// }


//////////////////////////////////////the part below is belongs to the commented part in HTML //////////////////////

// function start(e){
//     e.dataTransfer.setData("content",e.target.id);   
 
// }
// function drop(e){
//     e.preventDefault();
//     let data = e.dataTransfer.getData("content");
//     let img = document.getElementById(data);
//     e.target.appendChild(img);
//     e.target.style.border="solid  1px red";
 
// }
// function dragOver(e){
//     e.preventDefault();
// }
// function enter(e){

//     e.target.style.border="dashed  2px green";
// }
// function leave(e){
//     e.target.style.border="solid  1px red";
// }


///////////////////////////////////////////////////////////////////////////
function start(e){
    e.dataTransfer.setData("content",e.target.id);   

}
function drop(e){
    e.preventDefault();
    let data = e.dataTransfer.getData("content");
    let img = document.getElementById(data);
    e.target.appendChild(img);
    e.target.className="dragdrop";
}
function over(e){
    e.preventDefault();
}
function enter(e){
    e.preventDefault();
    e.target.className+=" hovering";
}
function leave(e){
    e.target.classList.remove("hovering");    
}
