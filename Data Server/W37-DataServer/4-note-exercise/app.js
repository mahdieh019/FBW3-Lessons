const express=require ('express');
const path=require('path');
const bodyParser=require('body-parser');

const server=express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use(express.static(path.join(__dirname,'public')));  


let notesList=[];

server.get('/subscribe',(req,res)=>{
     console.log(req.body);
     res.json(notesList);
})


server.post('/subscribe',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
    notesList.push(req.body);
    console.log(`note: ${req.body}  notesList:${noteList}`);
  
});

server.listen(4000, ()=>{
    console.log('Server started on port 4000');
})

