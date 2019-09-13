$(document).ready(function(){

    $("p").on(" mouseover",function(e){
        $('p').toggleClass("light");
        
    }); //?????????????????????????????????????????????????????
    
    // $('p').on({
    //     mouseover:function(){
    //         $('body').css('background','lightgreen');
    
    //     },
    //     mouseout:function(){
    //         $('body').css('background','lightblue');
    
    //     },
    //     click:function(){
    //         $('body').css('background','orange');
    
    //     }
    // });
    
    $('div').on('click',"section",function(){
      // $(this).css("color","red");
        $(this).css({"color":"red",
                    "background":"pink"

                   });
         $(this).slideToggle(3000);
          $(this).hide(3000).fadeIn(1000);

    });

    $('#add').on("click",function(){
            $("<section> this is new section instead from jQuery </section>").insertAfter("#add");//insertBefore
        });


        $('#off').on("click",function(){
            $('div').off("click");
        });


    });
    
    