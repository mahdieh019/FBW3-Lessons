$(document).ready(function(){
    $('select').change(function(){
       // alert("you select "+$(this).val());
        $('#p').text("you selected the city:"+$(this).val());
        // $('#p').show().fadeOut(3000);
        $('#p').hide().fadeIn(3000);

    });
});

// another way in Dom
// let select=document.getElementsByTagName('select')[0];// querySelector
// select.addEventListener("change",col);

// function col(){
//     alert("hi "+this.value);
// }

// select.onchange=function(){
//     alert("hi "+this.value);

// }