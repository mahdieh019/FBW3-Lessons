

-------------------------------------------------------------css

$("div:first").css("backgroundColor","pink");

$("div:eq(0)").css("color","yellow");
$("div:eq(1)").css("color","red");
                                                            first
$("div:first-of-type").css("color","white");
$("div.highlight:first").css("color","pink");

                                                            text
$("h1:eq(1)").text("jquery is awesome");

                                                            html


$("h1:eq(0)").html("<button> click me</button>  jquery is awesome");//????????
$("h1:eq(1)").html("<input type='text'> jquery is awesome");

                                                            val

$("h1:eq(1)").html("<input type='text' value='hi'>");
$("input").val("Hello");

                                                            attr

console.log($("input").attr("type"));
$("input").attr("type","color");


$("img:eq(1)").attr("src","https://picsum.photos/id/391/800/400");
$("img:eq(0)").attr("title","bridge photo");



---------------------------------------------------------------on    fadeUp()   mouseover
$('.btn').on('click',function(){

    $('p').fadeOut();
    $('p').fadeOut('slow');
    $('p').fadeOut('fast');
    $('p').fadeOut(2000); //very slow
    $('p').fadeOut(50); //very fast

});


--------------------------------------------------------------        on    click
$(document).ready(function(){
    $('.btn').on('click',function(){
        $('p').fadeIn('fast');
    })
})


-----------------------------------------------------------------     on    mouseover        


 $('p').on('mouseover',function(e){
        $(this).toggleClass('light');
    });  



------------------------------------------------------------------      on     css



$('p').on({

        mouseover: function(){
            $('body').css("color","pink");
        },


        mouseout: function(){
            $('body').css("BackgroundColor","yellow");
        },

        click: function(){
            $('body').css("BackgroundColor","orange");
            $('p').css({
                'color':'pink',
                'BackgroundColor':'yellow'
            })
        }

});


-----------------------------------------------------------------      on       slideToggle


$('div').on('click','section',function(){

    $(this).slideToggle(3000);       same result
    $(this).hide(3000).fadeIn(1000);


})


-------------------------------------------------------------------  on        insertAfter


$('#add').on('click',function(){
    $('<section> add a text </section>').insertAfter('#add');
})



------------------------------------- ----------------------------   on          off

$('#off').on("click",function(){
    $('div').off("click");

    });


-----------------------------------------------  dblclick    slideUp()  


$('.p').dblclick(function(){
    $(this).slideUp();
})
------------------------------------------------- select   change   text   fadeIn  hide()



$("select").change(function(){
    $("p").text($(this).val());
    $("p").hide().fadeIn(3000);

})
--------------------------------------------------- click   addClass    attr



$(document).ready(function(){

    $("button").click(function(){

        alert($(this).text);
        $("h1").addClass("Wrong");              
        $("h1").text($("h1").attr("class"));


        $(".p").css({
            "color":"green",
            "backgroundColor":"pink"
        });

    });
})

-------------------------------------------------------slideToggle    remove      toggleClass   





$(document).ready(function(){

        $("div").slideToggle(1000, function(){       
            $(this).remove();

        });



        $("h1").click(function(){
            $("h1").toggleClass("correct");   add the class 
            $("h1").removeClass("correct");
        });

})




---------------------------------------------------------------------hover  



$(document).ready(function(){
    $("h1").hover(

                function(){
                    $(this).addClass("bold");
                },

                function(){
                    $(this).removeClass("bold");
                }
            )           

})

------------------------------------------------------------mousenter       mouseleave




$(document).ready(function(){

    $("p").mouseenter(function(){
        $(this).addClass("highlight");
    });

    $("p").mouseleave(function(){
        $(this).removeClass("highlight");
    });


})

-----------------------------------------------------------keyup




$(document).body(function(){$('p').fadeOut('slow');
    $('p').fadeOut('fast');
    $('p').fadeOut(2000); //very slow
    $('p').fadeOut(50); //very fast
    $("input [type='text']").keyup(function(){$('p').fadeOut('slow');
    $('p').fadeOut('fast');
    $('p').fadeOut(2000); //very slow
    $('p').fadeOut(50); //very fast
        $("p").text("you add a number");$('p').fadeOut('slow');
    $('p').fadeOut('fast');
    $('p').fadeOut(2000); //very slow
    $('p').fadeOut(50); //very fast
        $("p").show().fadeIn();

    })
})

----------------------------------------------------------submit   test




$(document).body(function(){
    $("#btn").submit(function(e){

        let regEx=/^[a-zA-Z]+$/
        let val=$("#input").val();

        if(regEx.test(val)==false){
            $('#p').html('<p>not correct</p>').show().fadeOut(3000);
            e.preventDefault();
        }
    });
})
