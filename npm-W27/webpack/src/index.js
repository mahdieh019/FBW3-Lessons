//console.log("good morning");
import {hello} from './hello.js'
console.log(hello("Maria"));
var $ =require("jquery");

let greeting="Hi";
greeting+="it is me";
console.log(hello(greeting));

import './styles/main.scss';
//document.body.innerText=hello(`Mahsa`);
document.body.append(hello(`Mahsa`));
let div=$("<div></div>");
div.css("height","200px");
div.css("background","green");
div.html("new div from jquery");
$('body').append(div);
$('body').css("color","red");