class Product{

    constructor(productName,productDescription,productNumber){
        this.productName=productName;
        this.productDescription=productDescription;
        this.productNumber=productNumber;
    }

    function addProductToList(productName,productDescription,productNumber){
        var x1=document.forms["frm"];
        var text="";
        var i;
        for(i=0;i<x1.length;i++){
            text+=x1.elements[i].value+"  ";
        }
       
    } 
    function delProduct(){

    }
    function  displayProduct(){

    }
    document.getElementById("demo").innerHTML=text;

}





// function myFunction(){
//     var x1=document.forms["frm"];
//     var text="";
//     var i;
//     for(i=0;i<x1.length;i++){
//         text+=x1.elements[i].value+"  ";
//     }
//     document.getElementById("demo").innerHTML=text;
// }
