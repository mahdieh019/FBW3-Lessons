const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();


app.get('/',(req,res)=>{
   // res.send('<h1>Contact form </h1>');    
   res.render('contact', {layout:false})  // for view we use render
})



//static folder 
app.use('/public', express.static(path.join(__dirname,'public')))

// 1.parse application/x-www-form-urlencoded         //https://github.com/expressjs/body-parser 
app.use(bodyParser.urlencoded({ extended: false }))
 
// 2.parse application/json
app.use(bodyParser.json())

// view engin setup
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

//recieve the form data   it should be after bodyParser
app.post('/send',(req,res)=>{

    console.log(req.body);
//    res.send('sent');
const output = `
 <p> you have new contact Email </p>
   <ul>
     <li> Name : ${req.body.name}  </li>
     <li> Company: ${req.body.company}  </li>
     <li> Email: ${req.body.email}  </li>
     <li> Phone: ${req.body.phone} </li>
   </ul>
   <h2> Message </h2>
   <p> ${req.body.message} </p>

`
//    res.send(output);'


  // create reusable transporter object using the default SMTP transport
  //transport 
  let transporter = nodemailer.createTransport({
   // host: "mail.hamburg-coders.pro",
   host: "Smtp.gmail.com",
    // port: 587,
    port: 465,
    secure: true, // true for 465, false for other ports
    // auth: {
    //   user: 'dci@hamburg-coders.pro', // generated ethereal user
    //   pass: 'abcd1234' // generated ethereal password
    // },

    auth: {
        user: 'mahsanasr2016@gmail.com', // generated ethereal user
        pass: 'Mahdieh1354' // generated ethereal password
      },
    tls:{
        rejectUnauthorized:false
    }
  });

    // setup email data with unicode symbols
    let mailOptions = {
    //    from: '"DCI Contact" <dci@hamburg-coders.pro>', // sender address
        from: '"Mahsa" <mahsanasr2016@gmail.com>', // sender address
        to: 'mahsanasr2016@gmail.com', // list of receivers
        subject: ' DCI Contact Email  ', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
     
    // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', {msg:'Email has been sent', layout:false});
});

    
})
app.listen(3004, ()=>{
    console.log('server started on port 3004 ');
    
})

