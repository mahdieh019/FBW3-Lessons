let htag=document.getElementsByTagName("h1");
//htag[0].style.color="red";
htag[1].style.color="green";
// htag[0].style.border="5px solid lightblue";

htag[0].classList.add("light");
let para=document.getElementsByTagName("p");
para[0].classList.add('light');
// para[0].classList.remove('light'); to remove the class add
para[0].classList.add('bg');
para[1].classList.add('bg');

    ///////////////advance/////////////////
let button =document.createElement("button");
button.innerHTML="click me";
let body=document.getElementsByTagName("body")[0];
body.appendChild(button);


//getting the text content
let p=document.querySelector("p");
console.log(p.textContent);
p.innerHTML="I love <strong> javascript </strong> ."

//we add h4 in the paragraph
p.innerHTML="<h4> Javascript</h4>  I love <strong> javascript </strong>. ";

para[0].classList.remove('bg');
para[1].classList.add('light');

let pClass=document.querySelectorAll(".light"); // it works only for paragraphs which have the class "light" .
pClass[0].style.color="red";
pClass[1].style.color="red";
let allP=document.querySelectorAll("p"); //it works for all paragraphs

for(let i=0;i<allP.length;i++){
    allP[i].style.color="blue";
}
