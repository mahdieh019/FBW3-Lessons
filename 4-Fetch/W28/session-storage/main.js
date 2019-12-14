let field=document.querySelector("#field");

field.addEventListener("change",autosave);


// function autosave(){
//     let save=sessionStorage.setItem("save",field.value);
//     console.log(field.value);    
// }
//if(sessionStorage.getItem("save")){
//   document.getElementById("output").innerHTML =sessionStorage.getItem("save");
//   field.value=sessionStorage.getItem("save");
// }


//local storage
function autosave(){
    let save=localStorage.setItem("save",field.value);
}
    
if(localStorage.getItem("save")){
    field.value=localStorage.getItem("save");
}


