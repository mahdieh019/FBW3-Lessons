let cars={brand:"BMW",color:"white", year:"2019", model:""};
let person={firstname:"John",lastname:"smith",age:"50",haircolor:"green"};
console.log(cars);
console.log(cars.brand);
console.log(cars.color);
person.city="Hamburg"; //to add new property to an object
console.log(person);
person["f-c"]="yellow";
console.log(person);

let language=new Object();
console.log(typeof(language));
console.log(typeof(cars));

////////////////////////////////
let driver={
    age:60,
    firstname:"john",
    nationality:"UK",
    car:{
        brand:"ford",
        color:"black",
        year:"2012"
    }
};
console.log(driver.car);
console.log(driver.car.color);
console.log(driver["car"].year);
console.log(driver["car"]["brand"]);

driver.pet=["cat","dog"]; //add a new property as an array to the object
console.log(driver.pet[0]);
console.log(driver.pet[1]);
console.log(driver.pet);

////////////////////////////////

// let posts=["nice","very nice"]; //it is an array
  // to create an array of objects
let posts=[                   
    {title:"cats are nice",author:"Mansour"},
    {title:"Dogs are totaly awsome",author:"me"}
];
console.log(posts[0].title);
posts[0].title="hallo";
console.log(posts[0].title);
//console.log(posts);
posts[0].comment="nice post i like it";
console.log(posts);
posts[1].comment=["nice thank you","no, i hate you"];
console.log(posts[1]);
console.log(posts[1].comment[1]);
posts[1].comment[1]="nice post";
console.log(posts[1]);
posts[1].comment[1]+=", thanks a lot";
console.log(posts[1]);

// function inside the object

let student={
    fName:"Mansour",
    lName:"Tumeh",
    id:4654,
    overthirty:true,
    fullName:function(){
        return "The fullname is "+student.fName +" "+student.lName;
    }
};
console.log(student.fullName());

let p={
    fname:"mahsa",
    lname:"nasr",
    age:25,
    job:"web developer",
    city:"Hamburg"
};
console.log(p.fname +" "+p.lname +" is a "+ p.age+" years old "+p.job+" living in "+p.city);

let movies=[
    {
        title:"titanic",
        rating: 5 ,
        haswatched: true
    },
    {
        title:"despicable me 3",
        rating:4 ,
        haswatched: true
    },
    {
        title:" pretty woman",
        rating:3 ,
        haswatched: false
    },
    {
        title:"passenger",
        rating:4,
        haswatched:true
    },
    {
        title:"God father",
        rating:5,
        haswatched:5
    }
]

function stars(num){
    let str="";
    for(let i=1; i<=num;i++){
        str+="\u2B50";
    }
    return str;
}

movies.forEach(function(film){
    if(film.haswatched==true){
        console.log("You watched "+film.title + " has "+film.rating + " Stars" + stars(film.rating));
  
    }
    else{
        console.log("You have to watch "+film.title + " has "+film.rating + " Stars" + stars(film.rating));
    }
  
});

for(let i=0; i<movies.length;i++){
    if(movies[i].haswatched==true){
        document.write("<div style='color:green'> you watched "+ movies[i].title + 
        " has "+ movies[i].rating+ 
        " Stars <span style='color:gold;'> "+stars(movies[i].rating)+ "</span></div><br><br>" );
    }else{
        document.write("you have to watch "+ movies[i].title + 
        " has "+ movies[i].rating+ 
        " Stars <span style='color:#FFD700;'>"+stars(movies[i].rating)+ "</span><br><br>" );
    }
}
 

