create npmlink folder 
npm init -y
index.js (module.exports)
open the terminal
sudo npm link                    creates package-lock

create another folder usenpmlink
npm init -y
index.js (require)
open the terminal
npm link --save           we have to reped the last 3 commands every time  that we run the project
sudo npm link npmlink
node index.js

