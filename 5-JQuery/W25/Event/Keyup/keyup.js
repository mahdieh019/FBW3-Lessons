$(document).ready(function(){
    //$('#up') or
    $('input[type="text"]').keyup(function(){
        alert("you pressed a key");
    });

});


$(document).ready(function(){
    let i=0;
    $('#up').keyup(function(){ //keydown , keyup , keypress
        $('span').text(i+=1);
        $('p').show().fadeOut();
      // $('p').hide().fadeIn();

    });
});
