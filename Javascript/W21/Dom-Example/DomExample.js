// console.log(document.URL);
// console.log(document.title);
// document.title="Welcome";
// console.log(document.doctype);
// console.log(document.head);
//console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContent="Hello";
// console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
document.links[0].href="httpfdsafdss://facebook.com";
document.images[0].src="images.jpeg";
let items=document.getElementsByClassName("list-group-item");
console.log(items);
for(let i=0;i<items.length;i++){
    items[i].style.color="yellowgreen";
}
// items[3].textContent="this is the last item.";
//items[3].innerHTML="<h3>this is the last item.</h3>"; //this is the last item.
//items[3].textContent="<h3>this is the last item.</h3>";//"<h3>this is the last item.</h3>"


let header=document.querySelector("#main-header");
header.style.borderBottom="solid 7px #ccc";
console.log(header);
let input=document.querySelector("input");
input.placeholder="welcome in DCI";
input.value="Hello";

let btn=document.querySelector('input[type="submit"]');
btn.style.background="lightblue";

let item=document.querySelector(".list-group-item");
item.style.color="yellow";

let lastItem=document.querySelector(".list-group-item:last-child");
lastItem.style.color="lightblue";
let secondItem=document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color="green";
let titles=document.querySelectorAll(".title");
titles[1].textContent="Hello";

let odd=document.querySelectorAll("li:nth-child(odd)");
let even=document.querySelectorAll("li:nth-child(even)");

for(let i=0;i<odd.length;i++){
    odd[i].style.background="#c4c4c4";
    even[i].style.background="#eee";
}
let itemList=document.querySelector("#items");
console.log(itemList.parentNode);
itemList.parentNode.style.background="#f4f4f4";

//itemList.parentNode.parentNode.parentNode.remove();// removes the body
console.log(itemList.parentElement.parentElement.parentElement.parentElement);//<html lang="en">
console.log(itemList.childNodes);// don't use it
console.log(itemList.children);// is better if we want to remove 
console.log(itemList.children[0]);

for(let i=0;i<itemList.children.length;i++){
      itemList.children[i].style.borderBottom="4px solid yellowgreen";
}
itemList.firstElementChild.style.background="green";
itemList.firstElementChild.textContent="Hallooooooooo  ";

itemList.lastElementChild.textContent="I am the last element child";
console.log(itemList.nextSibling);
console.log(itemList.children[0].nextElementSibling);
itemList.children[0].nextElementSibling.textContent+=" next element sibling";
itemList.children[1].previousElementSibling.textContent+="Previous Element Sibling";
itemList.children[1].id="1";

//create a div
let newDiv=document.createElement("div");
//add class
newDiv.className="card card-body";
// add new attr
newDiv.setAttribute("myAttr","Hello World");
//create text node

let textDiv=document.createTextNode("Hi im new text node for the div");
newDiv.appendChild(textDiv);
console.log(newDiv);

//insert the newDiv before the div : main

let container=document.querySelectorAll(".container")[1];

let mainDiv=document.querySelector("#main");
newDiv.style.fontSize="1.6em";
container.insertBefore(newDiv,mainDiv);

//create new li
let newLi=document.createElement("li");
liText=document.createTextNode("im the new li :)");
newLi.appendChild(liText);
newLi.className="list-group-item";
let itemParent=document.querySelector("#items");
let firstLi=document.querySelector(".list-group-item");
itemParent.insertBefore(newLi,firstLi);



//ANOTHER WAY to create new li before the first one
// // create new li before the first one
// let newLi = document.createElement("li"); //create new li
// newLi.textContent="im the new li :)";
// newLi.className="list-group-item"; // we add the class to the li
// let itemParent=document.querySelector("#items"); // we select the parent
// let firstLi=document.querySelector(".list-group-item") // we select the element where we insert before
// itemParent.insertBefore(newLi,firstLi); // we insert the new li before the first li

let btn1=document.getElementById("btn");
btn1.addEventListener("dblclick",btnClick);

function btnClick(e){
    document.getElementById("header-title").textContent="changed";
    console.log(e);
    console.log(e.target.id);
    console.log(e.target.classList);
    document.getElementById("output").innerHTML="<h3>"+e.target.className+"<h3>";
    console.log(e.type);
}