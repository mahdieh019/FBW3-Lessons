// npm install request
// npm install axios
//  watch node 01_http_request         to repeat the running command after each 2 sec


//-------------------using request----------------

 const request=require('request');

 let link='https://jsonplaceholder.typicode.com/todos/1';

request(link, {json:true},(err, res,data)=>{
    if(err){
        return console.log(err);
    }
    //console.log(res);
    console.log(data);
});

//--------------------axios-------------------------

const axios=require('axios');

let link='https://jsonplaceholder.typicode.com/todos/1';

axios.get(link)
.then(response => {
    console.log(response.data);
})
.catch(error =>{
    console.log(error);
})