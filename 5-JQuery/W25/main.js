
//----------------------------css

$("#heading").css("color","green") ;

let x=document.querySelectorAll('li');
for(i=0;i<x.length;i++){
    x[i].style.color="green";
}

$("li").css("color","red");
$("li").css({
    "border":"2px solid lightGreen",
    "background":"rgba(27,67,120,0.5)",
    "fontSize":"2em",
    "color":"pink"
});
console.log($("h1").css("color"));
console.log($("li").css("backgroundColor"));//to get the color of background
console.log(document.querySelector('li').style.backgroundColor);//using Dom


$("div").css("backgroundColor","purple");//select all divs and give them a purple background

$("div.highlight").css("width","200px");//select the divs with class "highlight" and make them 200px wide

$("#third").css("border","1px solid orange");//select the div with id "third" and give it a orange border

$("div:first").css("backgroundColor","pink");//// select the first div only and change its font color to pink

$("div:eq(0)").css("color","yellow");
$("div:eq(1)").css("color","red");

$("div:first-of-type").css("color","white");
$("div.highlight:first").css("color","pink");

//----------------------------text

//document.querySelectorAll("h1")[1].textContent="jquery is awesome";
$("h1:eq(1)").text("jquery is awesome");//change the text of the h1 from 'jquery is nice' to 'jquery is awesome'

//-----------------------------html

$("h1:eq(0)").html("<button> click me</button>  jquery is awesome");//????????
$("h1:eq(1)").html("<input type='text'> jquery is awesome");

//------------------------------val

document.querySelector("input").value="jquery";
$("h1:eq(1)").html("<input type='text' value='hi'>");
$("input").val("Hello");// dynamically

//-----------------------------attr

console.log($("input").attr("type"));

$("input").attr("type","color");
console.log($("input").val());
$("input").attr("type","checkbox");
$("input").attr("selected","selected");
console.log($("input"));
$("input").attr("placeholder","write a text");


$("img").attr("src","https://picsum.photos/id/392/800/400");
$("img").attr("width","400px");
$("img:eq(1)").attr("src","https://picsum.photos/id/391/800/400");
$("img:eq(0)").attr("title","bridge photo");
