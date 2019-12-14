document.querySelector(".get-jokes").addEventListener("click",getJokes);
document.querySelector(".fetch-jokes").addEventListener("click",fetchJokes);
document.querySelector("#jQuery").addEventListener("click",jQueryJokes);

function getJokes(e) {
    e.preventDefault();
    let number=document.querySelector("#number").value;
    let xhr=new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload=function(){
        if(this.status===200 ){
            let response=JSON.parse(this.responseText);// let response=this.responseText;
            console.log(response);
            let output='';
            if(response.type==="success"){
                response.value.forEach(function (item){
                    output+=`<li>${item.joke}</li>`
                })
                document.querySelector(".jokes").innerHTML=output;
            }
        }
    }
    xhr.send();

  }


function fetchJokes(e){
    e.preventDefault();
    let output='';
    let number=document.querySelector("#number").value;
    fetch(`http://api.icndb.com/jokes/random/${number}`)
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        data.value.forEach(function (item){
            output+=`<li>${item.joke}</li>`
        });
    document.querySelector(".jokes").innerHTML=output;

    })
}


function jQueryJokes(e){
    e.preventDefault();
    let number=$("#number").val();
    if(number==''){
        alert("add a number")
    }
    else{
        
        let url=`http://api.icndb.com/jokes/random/${number}`;

        $.get(url,function(data,status){
            let output='';
            if(status==="success"){
                data.value.forEach(function (item){
                    output+=`<li>${item.joke}</li>`;
            })
            $(".jokes").html(output);
    }

})
}
}