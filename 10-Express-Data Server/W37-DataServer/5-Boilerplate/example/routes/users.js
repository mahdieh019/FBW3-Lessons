var express = require('express');
var router = express.Router();
var path=require('path');

/* GET home page. */

router.get('/',(req,res)=>{         //http://localhost:3333/users
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

module.exports = router;
