https://balsamiq.com/wireframes/


links for project
------------------------
 http://www.passportjs.org/docs/

 https://github.com/expressjs/session

 https://github.com/jaredhanson/connect-flash

 https://www.npmjs.com/package/bcryptjs

 https://www.npmjs.com/package/ejs

 http://www.passportjs.org/docs/configure/


 need to install
------------------
 expres js
 express-validator
 passport
 express-session
 connect flash
 bcrypt js
 mongoose
 dotenv
 colors
 express-ejs-layouts


folders
----------------
 Routes
 models
 views 
    dashboard.ejs
    layout.ejs
    login.ejs
    register.ejs


Steps
-----------------
1. app.js
2. npm init -y    to create package.js    2.change to live
3. npm i express passport mongoose express-session express-validator bcryptjs connect-flash passport-local ejs

------------------ npm start
----------------------------database 
1. import all requires in app.js 
2. models folder    --->  user.js       
3. config folder
     db.js  here we use dotenv
     config.env 
4. connect to mongoDB cloud 
    connect to application  (copy the link)
    inside config.env (paste  the link) database name is passport (it will be created automatically)
---------------------------------------------------
5. routes folder
    index.js
    users.js
6.  add EJS view Engine in app.js
7.  app.use(express.urlencoded({extended:true}))     for posting data
8.  Express session
9.  passport Middleware
10. connect Flash  to log in and logout
11. Global variables
12. Routes
13. auth.js
14. create view folder and its files

    layout.ejs
    ------------
15. install bootstrap  https://bootswatch.com/   choose one of the template(bootstrap.min.css) right click       and copy the link
16. inside layout.ejs  fontawesome , bootstrap , font awesome  https://getbootstrap.com 
17. .gitignore does not upload files into github
18. passport file    http://www.passportjs.org/docs/configure/

