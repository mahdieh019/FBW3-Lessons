npm install mongoose
touch 00_getting_started -------to create a js file
^c --------to run the code
node 00_getting_started


---------------------------------------------- connect to mongoDB through  terminal---------------
> show dbs
admin        0.000GB
collections  0.000GB
config       0.000GB
local        0.000GB
newdb        0.000GB
shop         0.000GB
test         0.000GB
> use shop
switched to db shop
> show collections
articles
products
shop

------------------------------------------it is an built in function in MongoDB-------------------------------------------------
> db.products.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 10 }


--------------------------------------express--------------------------------------------------------
npx express-generator mongoose-demo --no-view
npm install
npm run live

------------------------------------Start MongoDB-------------------------------------------------




# Start MongoDB
sudo service mongod start

# Verify that MongoDB has started successfully
# sudo service mongod status

# Stop MongoDB
# sudo service mongod stop

# Restart MongoDB
# sudo service mongod restart

Installing Mongoose

npm install mongoose