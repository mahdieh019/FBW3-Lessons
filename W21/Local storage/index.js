let pNumber=document.getElementById("number");
let pName=document.getElementById("name");
let saveBtn=document.getElementById("save");
let delBtn=document.getElementById("delete");


saveBtn.addEventListener("click",function(){
    localStorage.setItem(pNumber.value,pName.value);
    console.clear();
    showInfo();
});

delBtn.addEventListener("click",function(){
    localStorage.clear();
    console.clear();
    showInfo();
});



function showInfo(){
    let storage=localStorage;
    for(let i=0;i<storage.length;i++){
        console.log(storage.key(i)+" : "+storage.getItem(storage.key(i)));
    }
}
////////////////pushing in an array//////////////

let brand=document.getElementById("brand");
let addBrand=document.getElementById("add");
let cars=[];

addBrand.addEventListener("click", function(){
    cars.push(brand.value);
    localStorage.setItem('cars',cars);  ///bmw,ford,mercedes
    document.getElementById("carsInfo").innerHTML=localStorage.getItem("cars");
});

////////////////pushing an object in an array//////////////////////////
let per=[];
let person={};

let n=document.getElementById("name");
let a=document.getElementById("age");
let j=document.getElementById("job");
let c=document.getElementById("city");
let addInfo=document.getElementById("addInfo");

addInfo.addEventListener("click", function(){
    person.name=n.value;
    person.age=a.value;
    person.job=j.value;
    person.city=c.value;

    let strPerson=JSON.stringify(person);
    per.push(strPerson);
    localStorage.setItem('person',per);
    document.getElementById("personInfo").innerHTML=localStorage.getItem("person");
});