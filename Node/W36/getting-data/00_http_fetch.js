const https=require('https');
const options={
    hostname:'jsonplaceholder.typicode.com',
    port:443,
    path:'/todos/1',
    method:'GET'
}

/// ----------------first way-----------

//https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',(resp)=>{
https.get(options,(resp)=>{
    let data='';
    // recieve a chunk of data
    resp.on('data',(chunk)=>{
        data +=chunk;

    });
    //the  whole resp has been recieved
    resp.on('end',()=>{
        console.log(JSON.parse(data));
    });
}).on("error",(err)=>{
    console.log("Something went wrong: "+err.message);
});
//--------------------second way--------------

const request=https.request(options,response=>{
    console.log(`statusCode:${response.statusCode}`);

    response.on('data', d =>{y
        console.log(JSON.parse(d));
    })
})

request.on('error',error =>{
    console.log(error);
});

request.end();