function createText(){
    let text=document.createTextNode("helloooooooooooo");
    let heading=document.createElement("h1");
    heading.appendChild(text);
    document.getElementById("main").appendChild(heading);
}
let BTN=document.getElementById("btn");
BTN.addEventListener("click",function(){
     createText();
});




///////////////////////btn2/////////////////

function addElement(){
    let head=document.createElement("h1");
  //  let text=document.createTextNode("Hiiiiiiiiiiiiiiiiii"); // 2 ways
  //  head.appendChild(text);
    head.innerHTML="Hiiiiiii";
    head.style.color="green";
    document.getElementById("main").appendChild(head);
};

let BTN2=document.getElementById("btn2");
BTN2.addEventListener("click",function(){
    addElement();
});

//////////////////////////btn3/////////////////
let Div=document.getElementById("main");

let BTN3=document.getElementById("btn3");
BTN3.addEventListener("click",function(){
    Div.removeChild(Div.childNodes[0]);
});