const express = require('express');
const students = require('./info')
const app = express();
app.disable("x-powered-by");


app.get('/students',(req,res)=>{
    res.send(students);
});

app.get('/students/:id',(req,res)=>{
    let student = students.filter(
        (data)=>data.ID === parseInt(req.params.id)
    );
    res.send(student);
})

app.get('/students/:id/fees',(req,res)=>{
    let feesDetails = students.filter(
        (data)=>data.ID == parseInt(req.params.id)
    );
    feesDetails = feesDetails[0].Fees;
    res.send(feesDetails);
})

app.get('/students/:id/result',(req,res)=>{
    let resultDetails = students.filter(
        (data)=> data.ID === parseInt(req.params.id)
    );
    resultDetails = resultDetails[0].Result;
    res.send(resultDetails);
})
app.listen(3000,()=>{
    console.log("Listning at 3000")
})