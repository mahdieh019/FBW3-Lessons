
let x=document.querySelectorAll("P.into")
function myFunction(){
    var x=document.forms["fm"];
    var text="";
    var i;
    for(i=0;i<x.length;i++){
        text+=x.elements[i].value+" ";
    }
    document.getElementById("demo").innerHTML=text;
}