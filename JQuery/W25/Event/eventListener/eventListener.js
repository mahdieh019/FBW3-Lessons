//////////////////////in vanilla

let btn=document.querySelectorAll("button");


for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        // alert("you click the button");
        // alert(this.textContent);
        // this.style.background="yellow";
    });
}

///////////////////////in jQuery
 
$("button").click(function(){
   alert ("you click the button");
   alert($(this).text());
    $(this).css("backgroundColor","pink");
    $("h1").addClass("wrong");
    $("h1").text($("h1").attr("class"));

    //effect
    $("div").slideToggle(1000,function(){
        $(this).remove();
    });

});

$("h1").click(function(){
    $("h1").toggleClass("correct");// add the class
    //$("h1").removeClass("correct"); //remove the class

});


