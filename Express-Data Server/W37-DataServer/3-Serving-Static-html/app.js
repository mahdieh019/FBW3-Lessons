//npm init
//npm install --save express
//https://www.npmjs.com/package/express
//https://expressjs.com/en/guide/using-middleware.html


const express=require('express');
const path=require('path');
const bodyParser=require('body-parser'); //it is onde of express dependencies

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set Static path   express.static serves static assets such as HTML files, images, and so on.
app.use(express.static(path.join(__dirname,'public')));  


//to get json 
app.get('/users',(req,res)=>{         //http://localhost:3333/users
    let users=[
        {
            first_name:"john",
            last_name:'Doe',
            ahe:45,
            job:'React developer'
        },
        {
            first_name:"Tom",
            last_name:'Jack',
            ahe:40,
            job:'PHP developer'
        },
        {
            first_name:"Rony",
            last_name:'smith',
            ahe:20,
            job:'Java developer'
        },
        {
            first_name:"Peter",
            last_name:'Heshmit',
            ahe:30,
            job:'Javascript developer'
        }
    ];
    res.json(users);
})

//to download the file     http://localhost:3333/users
app.get('/download',(req,res)=>{
    res.download(path.join(__dirname, 'downloads/file.pdf'))
})

//post
app.post('/subscribe',(req,res)=>{
    console.log(req.body);
    let name=req.body.name;
    let email=req.body.email;
    console.log(name+' hase subscribed with '+ email);
    console.log(req.headers["user-agent"]);
    // console.log(req)
});

//redirect
app.get('/about',(req,res)=>{
    res.redirect('/about.html')
})

///
app.listen(3333, ()=>{
    console.log('Server started on port 3333');
})


