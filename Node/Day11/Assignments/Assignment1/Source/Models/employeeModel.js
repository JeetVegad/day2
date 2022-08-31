const mongoose = require('mongoose');
const employeeSchema = require('../Schema/employee');
const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
