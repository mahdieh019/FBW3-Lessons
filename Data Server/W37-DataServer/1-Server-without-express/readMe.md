What is Express?

"Express is a fast, unopinionated minimalist web framework for Node.js" - official web site: Expressjs.com

Express.js is a web application framework for Node.js. It provides various features that make web application development fast and easy which otherwise takes more time using only Node.js.

Express.js is based on the Node.js middleware module called connect which in turn uses http module. So, any middleware which is based on connect will also work with Express.js. 


Advantages of Express.js

    Makes Node.js web application development fast and easy.
    Easy to configure and customize.
    Allows you to define routes of your application based on HTTP methods and URLs.
    Includes various middleware modules which you can use to perform additional tasks on request and response.
    Easy to integrate with different template engines like Jade, Vash, EJS etc.
    Allows you to define an error handling middleware.
    Easy to serve static files and resources of your application.
    Allows you to create REST API server.
    Easy to connect with databases such as MongoDB, Redis, MySQL

Install Express.js

You can install express.js using npm. The following command will install latest version of express.js globally on your machine so that every Node.js application on your machine can use it.

npm install -g express

The following command will install latest version of express.js local to your project folder.

npm install express --save

As you know, --save will update the package.json file by specifying express.js dependency.