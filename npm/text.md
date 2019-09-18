`install npm`
sudo npm install npm@latest -g
npm -v                          to know the version

`install webpack`
create folder project-webpack
1. npm init -y
2. npm install --save-dev webpack webpack-cli  -----      it adds devDependencies
3. add `"build": "webpack"`                    -----      inside package.json 
4. src  ===> index.js                          -----      create a folder  src  then  create index.js
5. npm run build                               -----      it automatically creates dist folder
6. main.js                                     -----      create main.js inside the dist 
7. npm run build                               -----      add code inside index.js
8. npm run build                               -----      it adds the content of index.js to main.js
9. create hello.js and connect to index.js     -----      if we create another .js file like hello.js 
9. npm run build                               -----      we will see hello.js inside main.js
10. create a folder webpack.config.js          -----      in ther project-webpack
11. npm install --save-dev html-webpack-plugin -----      it adds html loader to package.json
12. add modules rules to webpack.config.js
module.exports={
    module:{
        rules:[
                {
                    test:/\.html$/,
                    use:[
                        {
                            loader:"html-loader",
                            options:{minimize: true}
                        }
                    ]
                },
            ]
        },
    plugins:[
            new Htmlwebpackplugin({
                template:"./src/index.html",
                filename:"./index.html"
            }),
        ]
}
13. create index.html in src folder
14. npm run build                                   -----      it creates index.html inside dist folder
15. npm install --save-dev webpack-dev-server       -----      it adds a server ("webpack-dev-server": "^3.8.0")                                                                      inside  package.js 
16. add "start: dev":"webpack-dev-server"           -----      
17. npm run start:dev
18. click on the link :8080                         -----      it opens the html file using port 8080
                                                               using 8080: we see the changes at the same time because it is live.
`install babel`
19. npm install --save-dev @babel/core @babel/cli @babel/preset-env      ------        to install babel
20. npm install babel-loader --save-dev                                  ------        to install babel loader and add 21.                                                                                    to webpack.config.js
                test:/\.js$/,
                exclude:/node-modules/,
                use:{
                    loader:"babel-loader"
                }
            },                                                

if we change the index.js---- then npm run build                ----- it adds the code to main.js inside dist

`File loader`
22. npm install file-loader --save-dev
23. add code to     webpack.config.js

            {
                test:/\.(png|svg|jpg|gif)/,
                use:{
                    loader:"file-loader"
                }
            }
24. npm run build                                              ------ it adds the image inside dist folder   



`webpack.config.js`
const Htmlwebpackplugin=require("html-webpack-plugin");
module.exports={
    module:{
        rules:[
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{minimize: true}
                    }
                ]
            },
            {
                test:/\.js$/,
                exclude:/node-modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.(png|svg|jpg|gif)/,
                use:{
                    loader:"file-loader"
                }
            }
        ]
    },
    plugins:[
        new Htmlwebpackplugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
    ]
}

`install css `
1. npm install --save -dev node-sass style-loader css-loader sass-loader mini-css-extract-plugin
2. add code to webpack.config.js

            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }


            new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })

`install jquery`

npm install --save -dev jquery