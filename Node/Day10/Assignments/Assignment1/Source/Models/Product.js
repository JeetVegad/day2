const mongoose = require('mongoose');
const category = require('./Category');

const productSchema = new mongoose.Schema({
    productName:{type:String},
    productPrice:{type:Number},
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
});

const productModel = mongoose.model("product",productSchema);
module.exports = productModel;