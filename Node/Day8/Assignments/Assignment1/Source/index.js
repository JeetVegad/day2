require('dotenv').config();
const express =require('express');
const jwt = require('jsonwebtoken');
const app =express(); 
app.disable("x-powered-by");

app.use(express.json());

app.use(["/fees", "/result"], (req, res, next) => {
  let headers = req.headers;
  let token;
  if (headers.authorization) {
    token = headers.authorization.split(" ")[1];
    req.token = token;
    next();
  } else {
    res.status(401).json({ message: "No token found" });
  }
});
app.post('/login',(req,res)=>{
    let token = jwt.sign(req.body,process.env.SeceretKey);
    res.status(200).send({message:"login Success",token})
})

app.get('/fees',(req,res)=>{
    jwt.verify(req.token,process.env.SeceretKey,(err,data)=>{
        if(err){
            res.status(403).json({message:"invalid token"});
        }
            res.status(200).json({
                status:"success",
                authdata:data,
                jsondata:[{
                    id:1,fees:"15000",name:"jeet",status:"pending"
                },
                {
                    id:2,fees:"15000",name:"akash",status:"paid"
                }]
            })
        
    })
})

app.get('/result',(req,res)=>{
    jwt.verify(req.token,process.env.SeceretKey,(err,data)=>{
        if(err){
            res.status(403).json({message:"invalid token"});
        }
            res.status(200).json({
                status:"success",
                authdata:data,
                jsondata:[{
                    id:1,name:"jeet",status:"pass",percentage:"75"
                },
                {
                    id:2,name:"akash",status:"pass",percentage:"85"
                }]
            })
        
    })
})

app.listen(3000,()=>{
    console.log("Listning at 3000")
})