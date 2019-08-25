var tasks=document.getElementById("tasks");

class Product{
    constructor(productName,productDescription,productNumber){
        this.productName=productName;
        this.productDescription=productDescription;
        this.productNumber=productNumber;
    }

        
    addProductToList(){
        var x1=document.forms["frm"];
        var i;
        let p=document.createElement("p");
        for(i=0;i<x1.length;i++){
            if(x1.elements[i].value!==""){
                let element=document.createElement("h4");
                    element.innerHTML=x1.elements[i].value;
                    element.style.display="inline-block";
                    element.style.paddingRight="400px";
                    element.style.marginLeft="70px";
                    p.appendChild(element);
                    x1.elements[i].value="";
                    x1.elements[i].focus();
                    let el=document.getElementsByTagName("h4");
            }
        }
        
            var delButton=document.createElement("button");
            delButton.className="delete";
            delButton.innerHTML="X";
            p.appendChild(delButton);
            p.className="par";
            tasks.appendChild(p);
            delButton.addEventListener("click",delProduct);
    }

  
}



function delProduct(e){
    console.log(e.target.classList);
    e.target.parentElement.remove();
    if(this.classList.contains("delete")){
       console.log("kjhukhdfgk");
     }  

    
} 

let c =new Product();
let btn=document.getElementById("button");
btn.addEventListener("click",c.addProductToList);






