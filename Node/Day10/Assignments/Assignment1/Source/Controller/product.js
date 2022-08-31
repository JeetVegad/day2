var express = require("express");
const mongoose = require("mongoose");
const ProductModel = require("../Models/Product");
var router = express.Router();

router.get('/', async (req, res) => {
    var data = await ProductModel.find().populate("categoryId", "categoryName");
    res.send(data);
    res.end();
});

router.post('/', async (req, res) => {
    var productModel = new ProductModel(req.body);
    var result = await productModel.save();
    res.end();
});

router.get('/:id', async (req, res) => {
    var data = await ProductModel.find({ _id: req.params.id });
    res.send(data);
    res.end();
});

router.put('/:id', async (req, res) => {
    var data = await ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.end();
});

router.delete('/:id', async (req, res) => {
    var data = await ProductModel.findByIdAndDelete({ _id: req.params.id });
    res.end();
});

module.exports = router;