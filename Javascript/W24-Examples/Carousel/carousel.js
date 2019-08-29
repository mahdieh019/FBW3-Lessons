let main=document.getElementById("main");
let right=document.getElementById("right");
let left=document.getElementById("left");

let arr=["poster/memento.jpg",
        "poster/inception.jpg",
        "poster/prestige.jpg",
        "poster/forrest_gump.jpg",
        "poster/reservoir_dogs.jpg",
        "poster/musik.jpg"
        ];



//left.addEventListener("click",previous);

right.addEventListener("click",next);

index=0

function next(){
    if(index==arr.length){    
     index=0;
    }
}
