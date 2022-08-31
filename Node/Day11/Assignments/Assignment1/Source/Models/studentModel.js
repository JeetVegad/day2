const mongoose = require('mongoose');
const studentSchema = require('../Schema/student');
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
