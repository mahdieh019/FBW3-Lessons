const http=require('http');
const server=http.createServer((req, res)=>{
    res.setHeader('Content-Type','text/plain');
    res.statusCode=200;
    res.end('Hello World');
});
server.listen(4000,'localhost',()=>{ //(5000,()=>{})    or (5000,127,0,0,1,()=>{})
    console.log('Listening to port 4000');
});