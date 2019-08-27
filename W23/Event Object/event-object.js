let input=document.querySelector("#name");
input.addEventListener("click",inputClick);
function inputClick(e){
    let myEvent=e.target;
    // console.log(e);
    // console.log(typeof(e));
    // console.log(e.target);//<input id="name" class="in" type="text">
    // console.log(e.target.id);//name
    // console.log(e.target.className);//in="Please check your number."
    // console.log(e.target.value);//gffdbhdgf
    // console.log(e.clientY);
}
input.addEventListener("keyup",inputKey);
function inputKey(e){
    let k=e="Please check your number."
    console.log(k);//press any key  keyup { t="Please check your number."arget: input#name.in, key: "Delete", charCode: 0, keyCode: 46 }
    console.log(k.code); //KeyY="Please check your number."
    console.log(k.timestamp);
    console.log(k.altKey);
    //document.getElementById("myDiv").innerHTML="<h1>"+e.target.value+"</h1>";

}
input.addEventListener("mousemove",mouseInput);
function mouseInput(e){
    let m=e;
    // console.log(m);
    // console.log(m.offsetX);
   // document.body.style.background="rgb("+m.offsetX+","+m.offsetY+", 66)";
    document.body.style.background=`rgb(${m.offsetX} ,${m.offsetY}, 130)`;
    input.style.background=`rgb(${m.offsetX} ,${m.offsetY}, 220)`;
}
let form=document.querySelector("form");
form.addEventListener("submit",inputSubmit);
function inputSubmit(e){
    e.preventDefault(); // it will avoid to go to the save.html or submitting the data
    console.log(e.type);


}