let btn=document.getElementById("btn");
btn.addEventListener("click",btnClick);
function btnClick(e){
    setTimeout(hideDiv,2000);
}
function hideDiv(){
    div.style.display="none";
}

let div=document.getElementById("myDiv");
div.addEventListener("click",divClick);
function divClick(e){
    console.log(e.target.height);
    console.log(e.target.textContent);
    console.log(e.target.innerHTML);
}

let input=document.getElementById("fName");
input.addEventListener("keyup",inputKeyUp);
function inputKeyUp(e){
    document.querySelector("h1").textContent=e.target.value;
}