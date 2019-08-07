class product{
  
    constructor(productName,productDescription,productNumber){
        this.productName=productName;
        this.productDescription=productDescription;
        this.productNumber=productNumber;
    }
    addProductToList(){
        var product={};
        var p=[];
        product.name=this.productName;
        product.Description=this.productDescription;
        product.productNumber=this.productNumber;

        var strProduct=JSON.stringify(product);
        p.push(strProduct);
        localStorage.setItem('product',p);
        document.getElementById("productInfo").innerHTML=localStorage.getItem("product");
    }
   
}
let productName=document.getElementById("pName").value;
let productDescription=document.getElementById("pDes").value;
let productNumber=document.getElementById("pCode").value;

let p1=new Product(productName,productDescription,productNumber);
let btn=document.getElementById("addInfo")
btn.addEventListener("click",p1.addProductToList);
