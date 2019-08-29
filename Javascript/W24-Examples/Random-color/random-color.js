
let fDiv=document.getElementById("f-div");
let main=document.getElementById("main");
let input=document.getElementById("input");
let button=document.getElementById("button");

button.addEventListener("click",randomColor);

function randomColor(){
    let input1=parseInt(input.value);
    for(i=0;i<input1;i++){
         let newDiv=document.createElement("div");

        styleBlock(newDiv);
        fDiv.appendChild(newDiv);
        main.appendChild(fDiv);

        let btn=document.createElement("button");
        btn.textContent="X";
        btn.className="delete";
        btn.style.color="black";
        newDiv.appendChild(btn);
        btn.style.cssFloat="right";
        btn.addEventListener("click",delDiv);

        input.value="";
        input.focus();
        main.style.heigh="500px";

    }

}


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
   return color;
  }

function styleBlock(newDiv){
    newDiv.style.background=getRandomColor();
    newDiv.style.width="150px";
    newDiv.style.height="100px";
    newDiv.style.cssFloat="left";
    newDiv.style.verticalAlign="middle";
    newDiv.textContent=getRandomColor();
    newDiv.style.margin="3px";
    newDiv.style.borderRadius="5px";
    return newDiv;
}

function delDiv(e){
    e.target.parentElement.remove();
}
