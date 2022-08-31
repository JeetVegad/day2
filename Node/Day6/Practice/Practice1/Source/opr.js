const customers = require('./info')
const add = (customer) =>{
    customers.push(customer);
    return customers;
}

const edit = (name,id)=>{
    customers.forEach((data)=>{
        if(data.id===id){
            data.name = name;
        }
    });
    return customers;
};

module.exports = {
    add,
    edit
};