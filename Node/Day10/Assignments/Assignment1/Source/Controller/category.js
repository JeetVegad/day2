var express = require("express");
const mongoose = require("mongoose");
const categoryModel = require('../Models/Category');
var router = express.Router();
router.get('/', (req, res) => {
    categoryModel.find((err, data) => {
        res.send(data);
        res.end();
    })
});

router.post('/', (req, res) => {
    var data = new categoryModel(req.body);
    data.save();
    res.end();
});

router.get('/:id', async (req, res) => {
    var data = await categoryModel.find({ _id: req.params.id });
    res.send(data);
    res.end();
});

router.put('/:id', async (req, res) => {
    var data = await categoryModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.end();
});

router.delete('/:id', async (req, res) => {
    var data = await categoryModel.findByIdAndDelete({ _id: req.params.id });
    res.end();
});

module.exports = router;