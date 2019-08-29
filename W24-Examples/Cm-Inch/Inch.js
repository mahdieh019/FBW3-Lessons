let select=document.getElementById("select");
let f1=document.getElementById("cm");
let f2=document.getElementById("inch");
let l1=document.getElementById("label1");
let l2=document.getElementById("label2");

select.addEventListener("change",converter);
function clearInputs(){
    f1.value="";
    f2.value="";
}

function converter(){
    f1.removeEventListener("keyup",convertToInch); 
    f2.removeEventListener("keyup",convertToCM);
    f1.removeEventListener("keyup",convertSecToMin);
    f1.removeEventListener("keyup",convertMinToSec);
    f1.removeEventListener("keyup",convertGramToKilo);
    f2.removeEventListener("keyup", convertKiloToGram);
  
    switch(select.value){
        case "0":
            clearInputs();
            l1.innerHTML="";
            l2.innerHTML="";
            break;
        case "1":
                l1.innerHTML="Centimeter";
                l2.innerHTML="Inches"  
                f1.addEventListener("keyup",convertToInch); 
                f2.addEventListener("keyup",convertToCM);
                break;
      
        case "2":
                l1.innerHTML="Seconds";
                l2.innerHTML="Minutes"         
                f1.addEventListener("keyup",convertSecToMin);
                f2.addEventListener("keyup", convertMinToSec);
                break;
             
         case "3":   
                l1.innerHTML="Gram";   
                l2.innerHTML="Kilo";     
                f1.addEventListener("keyup",convertGramToKilo);
                f2.addEventListener("keyup", convertKiloToGram);
                break;
        }
      
        
    }




////////////////////////////////////////////////////
function convertToInch(e){
    e.preventDefault();
    let inc=parseFloat(e.target.value) * 0.3937;
    f2.value=inc;

}

function convertToCM(e){
    e.preventDefault();
    let c=parseFloat(e.target.value)*2.54;
    f1.value=c;

}
//////////////////////////////////////////////////////
function convertSecToMin(e){
    e.preventDefault();
    let m=parseInt(e.target.value)/60;
    f2.value=m;
    
}
function convertMinToSec(e){
    e.preventDefault();
    let s=parseInt(e.target.value)*60;
    f1.value=s;
    
}

///////////////////////////////////////////////////////
function convertGramToKilo(e){
    e.preventDefault();
    let k=parseFloat(e.target.value)/1000;
    f2.value=k;
   
}
function convertKiloToGram(e){
    e.preventDefault();
    let g=parseFloat(e.target.value)*1000;
    f1.value=g;
    
}