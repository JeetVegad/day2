const express = require('express');
const router = express.Router();
global.config = require('./config');
let jwt  = require('jsonwebtoken');

router.use((req,res,next)=>{
   let  header = req.headers['authorization'];
   req.token =header;
next();
});



router.get('/',function(req,res,next){
    let customerdata = [
        {
            customerid:1,
            customername:"jeet"
        },
        {
            customerid:2,
            customername:"himanshu"
        },
        {
            customerid:3,
            customername:"akash"
        }
    ];
    jwt.verify(req.token,global.config.seceretKey,(err,data)=>{
        if(err){
            res.status(403).json({status:"failed",message:"token invalid"});
            return ;
        }
        res.status(200).json({status:"success",customerdata})
    })
    // res.json(customerdata);
})

module.exports = router;