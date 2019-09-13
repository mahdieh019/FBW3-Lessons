---------Babel------------

1.  npm install --save-dev @babel/core @babel/cli @babel/preset-env----------- install babel
2.  ./node_modules/.bin/babel input.js -o output.js   ------------------------create a new file and copy the content to new file
3. create babel.config.js
4. copy the text inside the  babel.config.js

        const presets = [
        [
            "@babel/env",
            {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
            useBuiltIns: "usage",
            },
        ],
        ];
        module.exports = { presets };


5.  ./node_modules/.bin/babel input.js -o output.js
6. cat output.js

function sayHello() {
  console.log("Hello ".concat(name, "!"));
}