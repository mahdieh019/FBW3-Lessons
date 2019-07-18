let inp=document.createElement("input");
document.getElementById("main").appendChild(inp);
document.querySelector("input").setAttribute("id","txt");
let D=document.createElement("div");
document.getElementById("main1").appendChild(D);


function  addElement(){
    let mainText=document.getElementById("txt").value;
    let text=document.createTextNode(mainText);
    let h4=document.createElement("h4");
    h4.appendChild(text);
    document.getElementById("main1").appendChild(h4);
    heading.value="";
}

document.getElementById("btn").addEventListener("click",function(){
    addElement();
});

document.getElementById("btn").addEventListener("click",function(){
    delElement();
});

function delElement(){
    document.getElementById("main1").removeChild(h4);
}



