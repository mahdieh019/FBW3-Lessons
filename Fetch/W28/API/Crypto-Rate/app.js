let input1=document.getElementById("inp1");
let input2=document.getElementById("inp2");
let select1=document.getElementById("sel1");
let select2=document.getElementById("sel2");
let BTN=document.querySelector('#btn');
BTN.addEventListener("click",fetchCurrency);

function fetchCurrency(e){
    e.preventDefault();
    let s1=select1.value;
    let in1=input1.value;
    let s2=select2.value;
    let url = `https://api.cryptonator.com/api/ticker/${s1}-${s2}`;
    console.log(url);
    fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function (data){
       let sum= data.ticker.price* in1;
       input2.value=sum;
        });


     }


      
