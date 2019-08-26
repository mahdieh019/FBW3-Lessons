let select=document.getElementById("select");
let cm=document.getElementById("cm");
let inch=document.getElementById("inch");
let x=cm;
let y=inch;

for(i=0;i<select.length;i++){
    switch(i){
        case 0:
            {
                cm.addEventListener("keyup",convertToInch); 
                inch.addEventListener("keyup",convertToCM);
                break;
            }
        case 1:
            {
              
                x.addEventListener("keyup",convertSecToMin);
                y.addEventListener("keyup", convertMinToSec);
                break;
            } 
         case 2:   
            {
               
                cm.addEventListener("keyup",convertGramToKilo);
                inch.addEventListener("keyup", convertKiloToGram);
                break;
            }
    }
}


// let cm=document.getElementById("cm");
// cm.addEventListener("keyup",convertToInch);

// let inch=document.getElementById("inch")
// inch.addEventListener("keyup",convertToCM);


// let length=document.querySelectorAll("select")[0];
// let time=document.querySelectorAll("select")[1];
// let mass=document.querySelectorAll("select")[2];




function convertToInch(e){
    e.preventDefault();

    let inc=parseFloat(e.target.value) * 0.3937;
    inch.value=inc;

}

function convertToCM(e){
    e.preventDefault();
    let c=parseFloat(e.target.value)*2.54;
    cm.value=c;

}




function convertSecToMin(e){
    e.preventDefault();
    let m=parseInt(e.target.value)/60;
    y.value=m;
    
}
function convertMinToSec(e){
    e.preventDefault();
    let s=parseInt(e.target.value)*60;
    console.log(s);
    x.value=s;
    
}


function convertGramToKilo(e){
    e.preventDefault();
    let k=parseFloat(e.target.value)/1000;
    inch.value=k;
   
}
function convertKiloToGram(e){
    e.preventDefault();
    let g=parseFloat(e.target.value)*1000;
    cm.value=g;
    
}