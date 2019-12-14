let key='01e3017ccb97350ba19984b340ca89dd'
// name:'mahsa'
let city=process.argv[2];
let country=process.argv[3];
let weather='';
let description='';
let link=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

const axios=require('axios');
axios.get(link).then(response => {
    let temp=response.data.main.temp;

    console.log(`it is now ${Math.round(temp-273)} in ${city}, ${country}`);
    console.log(`the current weather`);
    
    // console.log(response.data);
}).catch(error =>{
    console.log(error);
})