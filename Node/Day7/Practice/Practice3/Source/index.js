const express = require('express');
const employee = require('./employee');
const app = express();
app.disable("x-powered-by");

app.use('/employee',employee);
app.listen(3000,()=>{
    console.log('listning on port 3000')
});