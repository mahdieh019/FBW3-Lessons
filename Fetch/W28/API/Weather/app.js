const appKey= 'a54fee1878380e9147f7f7180644f6c8';
let city=document.querySelector("#city");
let btn=document.querySelector("#btn");
btn.addEventListener("click",search);

function weatherBallon(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city +"&appid="+appKey)
    .then(function(resp){return resp.json()})
    .then(function(data){
        drawWeather(data);
    })
    .catch(function(err){
        console.log(err);
    });
}

function drawWeather(data){
    var celcius=Math.round(parseFloat(data.main.temp)-273.15);
    var description=data.weather[0].description;
    document.getElementById('description').innerHTML=description;
    document.getElementById('temp').innerHTML=celcius+'&deg;';
    document.getElementById('location').innerHTML=data.name;

}
function search(){
    weatherBallon(city.value);
}

// document.querySelector("#input").onchange=function(){
//      weatherBallon(input.value);
// }

// window.onload=function(){
//     weatherBallon("Berlin");
// }



