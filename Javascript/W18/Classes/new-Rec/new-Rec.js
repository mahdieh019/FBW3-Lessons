function create_rect(){
    height=document.getElementById("height").value;
    width=document.getElementById("width").value;
    color=document.getElementById("color").value;

    const rect=new Rectangle(height,width,color);
    rect.create();
}
class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    create() {
        let myRect = document.getElementById("myrect");
        let newDiv = document.createElement("div");
        myRect.appendChild(newDiv);
        newDiv.style.height = this.height;
        newDiv.style.width = this.width;
        newDiv.style.background = this.color;
    }
}

class Circle extends Rectangle{
    constructor(height,width,color,radius){
        super(height,width,color);
        this.radius=radius;
    }
    createCircle(){
        let container=document.getElementById("myrect");
        let newCircle=document.createElement("div");
        container.appendChild(newCircle);
        newCircle.style.width=this.width;
        newCircle.style.height=this.height;
        newCircle.style.background=this.color;
        newCircle.style.borderRadius=this.radius;
    }
}
   
const circleBtn=document.getElementById("circle");
circleBtn.addEventListener("click",function(){
    height=document.getElementById("height").value;
    width=document.getElementById("width").value;
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    const circle=new Circle(height,width,color,radius);
    circle.createCircle();
});