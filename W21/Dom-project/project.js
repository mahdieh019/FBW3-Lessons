
class Product{
    constructor(productName,productDescription,productNumber){

        this.productName=productName;
        this.productDescription=productDescription;
        this.productNumber=productNumber;
    }
        
    addProductToList(){
        var tasks=document.getElementById("tasks");
        var x1=document.forms["frm"];
        var i;
        for(i=0;i<x1.length;i++){
            if(x1.elements[i].value!==""){
                let element=document.createElement("h4");
                    element.innerHTML=x1.elements[i].value;
                    element.style.display="inline-block";
                    element.style.paddingLeft="40px";
                    tasks.appendChild(element);
                    x1.elements[i].value="";
                    x1.elements[i].focus();
                    let el=document.getElementsByTagName("h4");
                    for(let i=0; i<el.length;i++){
                        el[i].addEventListener("click",function(){
                            tasks.removeChild(this);
                            });
                        }
            }
            else{
                console.log("add to the list");
            }
        }
    }

        delProduct(){
            var tasks=document.getElementById("tasks");
            var x1=document.forms["frm"];
            var i;
        }
    displayProduct(){

        }

}

let c =new Product();
let btn=document.getElementById("button")
btn.addEventListener("click",c.addProductToList);





