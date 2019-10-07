document.getElementById("button").addEventListener("click",loadText);

function loadText(){
    var xhr=new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET','text2.txt',true);  //true is for asyncronous
    console.log("readyState:", xhr.readyState);
    //Old Way
    // xhr.onreadystatechange=function(){
    //     if(this.readyState==4 && this.status==200){
    //        // console.log(this.responseText);
    //     }
    // }

    xhr.onprogress=function(){
        console.log('ReadyState: ', xhr.readyState);
    }
    //new Way
       xhr.onload=function(){  
        console.log("readyState:", xhr.readyState);

           if(this.status==200){                        
           // console.log(this.responseText);   
           document.getElementById("text").innerHTML=this.responseText;                                       
           }else if(this.status==404){
               document.getElementById("text").innerHTML="not found";
           }                                            
       }

    xhr.onerror=function(){
        console.log('request Error ...');
    }

   xhr.send();       //sends request
}

// readyStatuse Values
// 0: request not initialized
// 1: server connection established
// 2: request received 
// 3: processing request
// 4: request finished and response is ready




//HTTP statuses
// 200:"OK"
// 403: "Forbidden"
//404: "Not Found"