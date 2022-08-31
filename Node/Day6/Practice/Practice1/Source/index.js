const express = require('express');
const customers = require('./info');
const opr = require('./opr');

const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.get('/customers',(req,res)=>{
    res.send(customers);
})
app.get('/customers/:id',(req,res)=>{
    let customer = customers.filter(
        (data)=>data.id === parseInt(req.params.id));
        res.send(customer);
})

app.post('/customer',(req,res)=>{
    res.send(opr.add(req.body));
});
app.patch('/customer/edit/:id',(req,res)=>{
    res.send(opr.edit(req.body.name,parseInt(req.params.id)));
})

app.delete('/customer/delete/:id',(req,res)=>{
  const customer = customers.find(data=>data.id===parseInt(req.params.id));

  const index = customers.indexOf(customer);
  customers.splice(index,1);

  res.send(customer);
});

app.listen(3000,()=>{
    console.log('Listning at 3000');
});