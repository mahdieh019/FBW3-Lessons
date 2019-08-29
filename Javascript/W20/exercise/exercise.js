let pass =document.querySelector(".password");
// function checkLength(input){
//     if(input.value.length>=8){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function checkLength(input){
    if(input.value.length>=8){
        document.querySelector(".length").style.color="yellow";
    }else{
        document.querySelector(".length").style.color="red";
    }
}


////////////////////////
function lowCase(input){
    var value=input.value;
   if(value.match("[a-z]+")){
    document.querySelector(".lowercase").style.color="yellow";
   }else{
    document.querySelector(".lowercase").style.color="red";
    }
}

function upCase(input){
    var value=input.value;
    if(value.match("[A-Z]+")){
        document.querySelector(".uppercase").style.color="yellow";
       }else{
        document.querySelector(".uppercase").style.color="red";
        }
}

function num(input){
    var value=input.value;
    if(value.match("[0-9]+")){
        document.querySelector(".digit").style.color="yellow";
    }else{
        document.querySelector(".digit").style.color="red"; 
    }
}


function symb(input){
    var value=input.value;
    if(value.match(/(\$|\€)/g)){
        document.querySelector(".special").style.color="yellow";
    }else{
        document.querySelector(".special").style.color="red"; 
    }
}

pass.addEventListener("keyup",function(){
    checkLength(pass);
    lowCase(pass);
    upCase(pass);
    num(pass);
    symb(pass);
});