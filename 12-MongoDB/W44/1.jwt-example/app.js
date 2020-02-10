const express=require('express');
const jwt=require('jsonwebtoken');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api',(req,res)=>{
    res.json({
        message:'Welcome to Json web token'
    });
})

app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secret key',(err, authData)=>{
        if(err){
            res.status(403).send('error ...');
        }
        else{
            res.json({
                message:' Data created ...'
            });
        }
    })
 
})

const user={
    id: 123,
    username:'Mahsa',
    email: 'mahsa@gmail.com'
}

app.post('/api/login',(req,res)=>{
   
//https://tools.sohamkamani.com/base64-decoder/

//create the Token
    jwt.sign({user} ,'secret key',(err, token)=>{
        res.json({
            token
        })
    })  
    
})

// verify the token
function verifyToken(req,res, next){
    // get the header value 
    const headerInfo =req.headers['authorization'];
    console.log(headerInfo);
    if (typeof headerInfo !=='undefined'){
        const info = headerInfo.split(' ');
        req.token = info[1];
        next();
    }else{
        res.status(403).json({
            message:'you cant post'
        })
    }
} 

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log("Connected to port " + port);
});

