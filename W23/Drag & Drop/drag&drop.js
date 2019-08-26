let myDiv=document.getElementById("main");

myDiv.addEventListener("dragstart",start);
myDiv.addEventListener("dragend",end);


function start(){
    console.log("drag started");
}
function end(){
    console.log("drag ended");
}

let desDiv=document.querySelectorAll(".destination");
for(let div of desDiv){
    div.addEventListener("dragover",over);
    div.addEventListener("dragenter",enter);
    div.addEventListener("dragleave",leave);
    div.addEventListener("drop",drop);

}

// destDiv.forEach(function(div){
//     div.addEventListener("dragover",over);
//     div.addEventListener("dragenter",enter);
//     div.addEventListener("dragleave",leave);
//     div.addEventListener("drop",drop);

// });
// destDiv.forEach((div) =>{
//     div.addEventListener("dragover",over);
//     div.addEventListener("dragenter",enter);
//     div.addEventListener("dragleave",leave);
//     div.addEventListener("drop",drop);

// });


// for(i=0;i<desDiv.length;i++){
//     desDiv[i].addEventListener("dragover",over);
//     desDiv[i].addEventListener("dragenter",enter);
//     desDiv[i].addEventListener("dragleave",leave);
//     desDiv[i].addEventListener("drop",drop);

// }


function over(e){
    e.preventDefault();
    console.log("drag over event");
}


function enter(e){
    e.preventDefault();
   console.log("drag enter");
}

function leave(){
    console.log("drag leave");
}

function drop(){
  this.append(myDiv);
}
