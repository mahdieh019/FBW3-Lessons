 
var myRect = document.getElementById("myrect");
 var btn=document.createElement("button");
 myRect.appendChild(btn);
 btn.innerHTML="click please";
 btn.addEventListener("click",function(){
     d.create();
 });

class Rectangle{
    constructor( height,width,color){
        this.height=height;
        this.width=width;
        this.color=color;
    }
    create(){
        var myRect = document.getElementById("myrect");
        var newDiv=document.createElement("div");
        myRect.appendChild(newDiv);

        newDiv.style.backgroundColor=this.color;
        newDiv.style.width=this.width;
        newDiv.style.height=this.height;
        newDiv.style.margin="10px";
        newDiv.style.float="left";
    }
}

const d=new Rectangle("300px","400px","red");

