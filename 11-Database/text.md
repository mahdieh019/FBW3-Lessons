to download the xampp
https://vitux.com/how-to-install-xampp-on-your-ubuntu-18-04-lts-system/

----to install xampp-----------------------
chmod 755 xampp-linux-x64-7.3.12-0-installer.run
sudo ./xampp-linux-x64-7.3.12-0-installer.run


-----------------------------to run the xampp----------------------
sudo /opt/lampp/lampp start
http://localhost/phpmyadmin/


-------------------------------to install mysql---------------------------- 
https://www.linode.com/docs/databases/mysql/install-and-configure-mysql-workbench-on-ubuntu/




TO RUN APP.JS IN THE TERMINAL
npm run live



-------------------------------------------------to create in phpMyAdmin ------------------------------------------
choose database then sql then 
CREATE TABLE users (id int AUTO_INCREMENT ,first_name VARCHAR(100), last_name VARCHAR(100), email VARCHAR(50), password VARCHAR(50), PRIMARY KEY(id) )




-------------------------------------------------to create in MYSQL workbench------------------------------------
CREATE TABLE mysqlDB.order (order_id int AUTO_INCREMENT PRIMARY KEY
,user_id int(11), order_date TIMESTAMP
, order_status VARCHAR(50) )


insert into mysqlDB.order (order_id , user_id , order_date , order_status) VALUES (NULL, 1, '2020-10-10', 'in progress') 

select first_name, last_name, order_id from users, mysqlDB.order where users.id=mysqlDB.order.user_id

CREATE TABLE products (product_id INT AUTO_INCREMENT  PRIMARY KEY , product_name VARCHAR(100), products_desc VARCHAR(100) )

insert into mysqlDB.products (product_id , product_name , products_desc ) VALUES (NULL, 'Apple iphone Xs ', '64GB space grau')

//-------------------------------to add a new column to the table----------------------------------------------
ALTER TABLE products
ADD price FLOAT(11)

ALTER TABLE mysqlDB.order ADD product_id int

---------------------------------to assign a value to the price-------------------------------------

UPDATE products set price = 1046.5 WHERE product_id = 1
UPDATE orders set product_id=1  WHERE order_id = 1 

select user_name, order_id,product_id from users, product 
SELECT * from  products , mysqlDB.order where mysqlDB.order.product_id=products.product_id