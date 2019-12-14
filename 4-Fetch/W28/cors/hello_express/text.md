//1024-49151 are called user or registered ports


default filename for express (index.js)
npm init
npm install express --no-save
node index.js
open the browser and in URL write:localhost + port No.(ex. 3000) something which we used in the index.js


--------------------------------------------
app.get('/state',function(req,res){        //state route
    res.send(state)
});

start web server then in url   http://localhost:3000/state

-----------------------------------------

app.get('/hamburg.png',function(req, res){          /// sergey's code
    res.sendFile('hamburg.png',{root:__dirname});
})

 node index.js                               in terminal
http://localhost:3000/hamburg.png            in url

------------------------------------------
ifconfig                                to know public IP 
sudo apt install net-tools              if it is not installed


----------------visual studio code------------------------

create index.html --> 
live server -->
fetch("http://192.168.8.137:3000/state")     in console  ( sergey's ip address)

we have error then we add
-----
app.use(function(req,res,next){                 //additional headers for CROS
    res.header("Access-Control-Allow-Origin","*");
    res.hasHeader("Access-Control-Allow-Header", "Origin","X-Requested-With,Content-Type,Accept");
});

node index.js 
-------------------
