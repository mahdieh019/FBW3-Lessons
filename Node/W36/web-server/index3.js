const http=require('http');
const fs=require('fs');
const server=http.createServer((request,response)=>{
    response.setHeader('Content-type','text/html');
    response.setHeader('Access-Control-Allow-Origin','*');
    let message="Node.js has a built-in module called http, which allows Node.js to transfer data";
    
    let html=fs.readFileSync(__dirname + '/index3.html' , 'utf8');
    html=html.replace('{message}', message);
    let src="https://picsum.photos/500/500";
    html=html.replace('{src}',src);
    
    response.writeHead(200);
    response.end(html);
  
});

server.listen(1241,()=>{
    console.log('Listening to port 1241');
});