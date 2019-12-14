// $("document").ready(function(){
//     $(".btn").click(function(){


//         $('#p').text("Hallo "+$("input").val()+" Today is "+getToday()+ " and left "+left() );

//     });

// });
// function getToday(){
//     var d=new Date();
//     var today;
//     switch(d.getDay()){

//         case 0:
//             today="Sunday";
//             break;
//         case 1:
//             today="Monday";
//             break;
//          case 2:
//             today="Tuesday";
//             break; 
//         case 3:
//             today="wednesday";
//             break;
//         case 4:
//             today="thursday";
//             break;
//         case 5 :
//             today="Friday";
//             break;
//         case 6:
//             today="Saturday";
//             break;
//     }
//     return(today);
// }
// function left(){
//     var d=new Date();
//     return (7-d.getDay());
// }



$("document").ready(function(){
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date = new Date();
    $(".btn").click(function(){


        $('#p').text("Hallo "+$("input").val()+" Today is "+weekday[date.getDay()]+" and left "+(7-(date.getDay()))+" days");

    });

});

	

 
