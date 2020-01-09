const mongoose = require("mongoose");
const { Schema } = mongoose;

let productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

let Product=mongoose.model('Product',productSchema); 

module.exports=Product;