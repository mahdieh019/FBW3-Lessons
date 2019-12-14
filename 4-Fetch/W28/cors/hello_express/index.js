var express=require('express');       //import the module
var app=express();                    //init the app

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Alow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });


var state={'state':'Hamburg',
           'capital':'Hamburg'}

app.get('/',function(req,res){        //define routes
    res.send('hello world!')
});

app.get('/state',function(req,res){        //state route
    res.send(state)
});

app.get('/hamburg.png',function(req, res){          /// sergey's code
    res.sendFile('hamburg.png',{root:__dirname});
})

app.listen(3000,function(){
    console.log("Example app started");
})