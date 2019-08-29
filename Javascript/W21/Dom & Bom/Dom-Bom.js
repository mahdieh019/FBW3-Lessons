//alert(document.documentElement.getAttribute("lang"));
document.write("hello world");
document.body.innerHTML+="body";

///document.querySelector("body")  (is same as) document.body

let elementName=document.body.firstElementChild.nodeName;
//alert (elementName);
//document.body.firstElementChild.innerHTML="Hiiiii";
document.body.firstElementChild.textContent="Hiiiii"; //innerHTML & textContent are similar
//document.querySelectorAll("body")[0].innerHTML="Mahsa";

/////////////////add h2 before h1 in the body //////////////
//alert("the first element in body is :" + document.body.childNodes[0].nodeName);
let h1=document.body.childNodes[0];
let newH2=document.createElement("h2");
newH2.innerHTML="the first h2";
document.body.insertBefore(newH2,h1);

//////////////////////////////////////

let matches=document.getElementsByClassName("test");
for(let i=0;i<matches.length;i++){
    matches[i].style.background="yellowgreen";
}

// for(let i of matches){
//     i.style.color="#fff";
// }

/////////////////////////////////////////

let lastGreenP=matches[matches.length-1];

let newP=document.createElement("p");
newP.innerHTML="new Red Paragraph";
newP.style.background="red";
document.body.insertBefore(newP,lastGreenP);
//document.body.appendChild(newP);

////////////////////////////////////////
let Paragraph=document.getElementsByTagName("p");
console.log(Paragraph.length);

/////////////////////
for(let i=0;i<Paragraph.length;i++){
    Paragraph[i].style.fontWeight="bold";
    Paragraph[i].style.border="1px solid black";
}





