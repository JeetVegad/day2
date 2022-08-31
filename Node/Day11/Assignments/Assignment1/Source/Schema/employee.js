const mongoose = require('mongoose');
const assignmentType = mongoose.Schema({
  assignmentId: {
    type: Number,
    required: true,
  },
  assignmentCategory: {
    type: String,
    required: true,
    minLength: [5, 'Minimum length should be 5 characters'],
  },
  assignmentName: {
    type: String,
    required: true,
    minLength: [5, 'Minimum length should be 5 characters'],
    maxLength: [255, 'Minimum length should be 255 characters'],
  },
  assignmentStatus: {
    type: String,
    required: true,
  },
});
const employeeSchema = new mongoose.Schema({
  empId: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    minLength: [5, 'Minimum length should be 5 characters'],
    maxLength: [50, 'Minimum length should be 50 characters'],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [5, 'Minimum length should be 5 characters'],
    maxLength: [50, 'Minimum length should be 50 characters'],
  },
  assignments: [assignmentType],
});

module.exports = employeeSchema;
