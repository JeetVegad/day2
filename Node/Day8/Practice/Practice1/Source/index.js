const express = require('express');
const app =express();
app.disable("x-powered-by");

const customer = require('./customer')
global.config = require('./config');
let jwt  = require('jsonwebtoken');
// const router = express.Router();
app.use(express.json());
app.use('/data',customer);
app.post('/login',function(req,res,next){
    let userData={
        username:req.body.username,
        password:req.body.password
    };
    let token = jwt.sign(userData,global.config.seceretKey,{
        algorithm:global.config.algorithm,
        expiresIn:'7d'
    })
    if(userData.username == 'admin' && userData.password == 'admin'){
        res.status(200).json({
            message:'login successful',
            jwtoken:token
        });
    }else{
        res.status(401).json({
            message:"login failed"
        });
    }
})
app.listen(3000,()=>{
    console.log("Listning at 3000")
})