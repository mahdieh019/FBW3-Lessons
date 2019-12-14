var map;
var lat=document.getElementById("in1");
var lng=document.getElementById("in2");
var BTN=document.getElementById("btn");
var slider=document.getElementById("myRange");

// BTN.addEventListener("click",newMap);
BTN.addEventListener("click",initMap);
slider.addEventListener("change",zoomMap);

function initMap(){
    map=new google.maps.Map(document.getElementById('map'),{
        center:{lat:53.5511,lng:9.9937},
        zoom:parseInt(slider.value)
    });
}
function newMap(e){
    e.preventDefault();
    map.setCenter(new google.maps.LatLng(parseFloat(lat.value),parseFloat(lng.value)));
}
function zoomMap(){
    map=new google.maps.Map(document.getElementById('map'),{
        center:{lat:53.5511,lng:9.9937},
        zoom:parseInt(slider.value)
}