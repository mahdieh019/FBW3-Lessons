let developer={
    "name":"Mahsa",
    "age": 25,
    "job":"Web-developer"
}
function info(dev){
    console.log(`the name is ${dev.name} and the age is ${dev.age} and the job is ${dev.job}`);
}
export {developer,info};

let persons=[{
                "name":"ali",
                "age":23,
                "city":"Hamburg",
                "job":"programmer"
            },
            {
                "name":"Maria",
                "age":32,
                "city":"Berlin",
                "job":"web-developer"
            },
            {
                "name":"Sami",
                "age":31,
                "city":"Breme",
                "job":"IT-administrator"
            }
        ]
 
function person(per){
    for(let i=0;i<per.length;i++){
        console.log(`name: ${per[i].name} age: ${per[i].age} city: ${per[i].city} job:${per[i].job}`)
    }
}
export {persons,person};