var express=require("express");
var mongoose=require("mongoose");
var category = require('./Controller/category');
var product = require('./Controller/product');

var connect = mongoose.connect("mongodb://localhost/practice2",()=>{
    console.log("connected to Mongodb")
});
var app=express();
app.disable("x-powered-by");
app.use(express.json());
app.use('/category',category);
app.use('/product',product);

app.listen(3000,()=>{
    console.log("Listning at 3000")
});