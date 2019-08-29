let form=document.getElementById("task-form");

let task1=document.getElementById("task1");
let task2=document.getElementById("task2");
let task3=document.getElementById("task3");

let task4=document.getElementById("task4");
let task5=document.getElementById("task5");
let task6=document.getElementById("task6");

let task7=document.getElementById("task7");
let task8=document.getElementById("task8");
let task9=document.getElementById("task9");

let task10=document.getElementById("task10");
let task11=document.getElementById("task11");
let task12=document.getElementById("task12");

let task13=document.getElementById("task13");
let task14=document.getElementById("task14");
let task15=document.getElementById("task15");


function add(e){
    e.preventDefault();
    let t3=parseFloat(task1.value)+parseFloat(task2.value);
    task3.value=t3;
  
}
function minus(e){
    e.preventDefault();
    let t6=parseFloat(task4.value)-parseFloat(task5.value); 
    task6.value=t6;
}

function multi(e){
    e.preventDefault();
    let t9=parseFloat(task7.value)*parseFloat(task8.value); 
    task9.value=t9;
}

function divide(e){
    e.preventDefault();
    if(parseFloat(task10.value)!="" && parseFloat(task11.value)!="" && parseFloat(task11.value)!=0 ){
        let t12=parseFloat(task10.value)/parseFloat(task11.value); 
        task12.value=t12;
    }
    else {
        alert("please enter any number except 0 !");
    }
}

function divisionReminder(e){
    e.preventDefault();
    let t15=parseFloat(task13.value)%parseFloat(task14.value); 
    task15.value=t15;
}





task1.addEventListener("keyup",add); 
task2.addEventListener("keyup",add);

task4.addEventListener("keyup",minus); 
task5.addEventListener("keyup",minus);

task7.addEventListener("keyup",multi); 
task8.addEventListener("keyup",multi);

task10.addEventListener("keyup",divide); 
task11.addEventListener("keyup",divide);


task13.addEventListener("keyup", divisionReminder); 
task14.addEventListener("keyup", divisionReminder);