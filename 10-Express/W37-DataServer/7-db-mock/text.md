npx npx express-generator example --no-view --git
npm install in shop folder
DEBUG=shop:* npm start
change to live in package.json
DEBUG=shop:* npm run live


https://github.com/typicode/lowdb

npm install lowdb

-----------------install curl in the normal terminal--------------------
sudo app-get install curl
man curl

curl http://localhost:3000              -------------shows index page
curl http://localhost:3000/records      -------------get json


-------------to post------------------------
curl -d 'title=samsung Phone blue&price=100,00' -v -i http://localhost:3000/records
  

