const http=require('http');
const fs=require('fs');

const server=http.createServer((request,response)=>{

    switch(request.url){
        case '/':
                fs.createReadStream(__dirname + '/index5.html').pipe(response);
                break;
        case '/api':
                response.setHeader('Content-type','application/json');
                response.writeHead(200);
        
                let data={
                    firstname:'john',
                    lastname: 'Doe',
                    job:'web developer',
                    skills:{
                        react:"90%",
                        javascript: '80%',
                        php:'50%'
                    }
                };
                response.end(JSON.stringify(data));
                break;
        default :
        response.writeHead(404);
        response.end();
    }

    // response.writeHead(200);
    // if(request.url==='/'){
    //     fs.createReadStream(__dirname + '/index5.html').pipe(response);
    // }
    // else if(request.url==='/api'){
    //     response.setHeader('Content-type','application/json');
    //     response.writeHead(200);

    //     let data={
    //         firstname:'john',
    //         lastname: 'Doe',
    //         job:'web developer',
    //         skills:{
    //             react:"90%",
    //             javascript: '80%',
    //             php:'50%'
    //         }
    //     };
    //     response.end(JSON.stringify(data));
    // }
    // else{
    //     response.writeHead(404);
    //     response.end();
    // }
    console.log("you are in : ",request.url);
});

server.listen(1245,()=>{
    console.log('Listening to port 1245');
});