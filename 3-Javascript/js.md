console.error('this is an error');

const s='maria, mahsa, rania';
console.log(s.split(', '));


const f=['A','B','C'];
f[3]='x';

console.log(Array.isArray(f));  true
------------------------------------------
let x=[
        {id:1,text:'hallo',isOK:'true'},
        {id:2, text:'hi', isOK:'false'}
    ]

-----------    
for(app of x){
    console.log(app.text);
}
-----------
x.forEach(function (app){
    console.log(app.text);
})
-----------
const x1=x.map(function(app){
    return app.text;
})
console.log(x1);        result is in array

-----------
const x2=x.filter(function (app)){
    return app.isOK===true;
}.map(function(app){
    return(app.text)
})
console.log(x2);
----------------------------------------------------------
const x=10;
const color= x>10 ? 'red':''green;

const p=(x,y)=>console.log(x+y);   //const p=(x,y)=>(x+y);  instead of  return(x+y)
x(4,3);                            // console.log(p);

----------------------------------------------------------

function Pesson(fName,lName,date){
    this.fName=fname;
    this.lName=lName;
    this.date=new Date(date);
    this.getBirthYear=function(){
       return this.date.getFullYear();
        }
    this.getFullName=function(){
        return '${this.fName} ${this.lName};
    }
}

const p1=new Person('Maria','shmit','4-3-1980');
const p2=new Person('Maria','shmit','4-6-1986');

console.log(p1.getBirthYear());

-------------
function Pesson(fName,lName,date){
    this.fName=fname;
    this.lName=lName;
    this.date=new Date(date);
    
}


Person.prototype.getBirthYear=function(){
    return this.date.getFullYear();
}
Person.prototype.getFullName=function(){
     return '${this.fName} ${this.lName};
}


const p1=new Person('Maria','shmit','4-3-1980');
const p2=new Person('Maria','shmit','4-6-1986');

console.log(p1.getBirthYear());


----------------------------------------------

