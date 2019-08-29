let text=document.getElementById("toDo");
let button=document.getElementById("add");
let tasks=document.getElementById("tasks");

function addToDo(){
    if(text.value!==""){
        let element=document.createElement("h4");
        element.innerHTML=text.value;
        tasks.appendChild(element);
        text.value="";
        text.focus();
        let el=document.getElementsByTagName("h4");
        for(let i=0; i<el.length;i++){
            el[i].addEventListener("click",function(){
                tasks.removeChild(this);
                });
            }
        }else{
            console.log("add to the list");
    }
}

function pressEnter(MyEvent){
    if(MyEvent.keyCode==13){
        addToDo();
    }
}

button.addEventListener("click",addToDo);
text.addEventListener("keypress",pressEnter);
