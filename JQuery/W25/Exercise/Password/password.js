$(document).ready(function(){
    // 
    // let show=$('show');
    // let hide=$('hide');
    let checkbox=$('input [type=checkbox]');
    checkbox.on("change",function(){
        let pass=$('#pass');
       if($(this).prop("checked")==true) {
           pass.attr("type","text");
       }else{
           pass.attr("type","password");
       }
       
    });

});