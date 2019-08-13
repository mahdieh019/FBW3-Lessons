let link=document.querySelector("a");// we get the first link

console.log(link.getAttribute("href"));// it is www.google.com
link.setAttribute("href","http://www.ping.com"); // it changes to the ping
console.log(link.getAttribute("href"));


function fun(){
    let image=document.querySelector("img");
    image.setAttribute("src","logo.png");
  

}

