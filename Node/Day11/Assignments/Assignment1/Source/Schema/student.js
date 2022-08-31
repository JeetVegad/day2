const mongoose = require('mongoose');
const FeesType = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: Date,
  status: String,
});
const ResultType = mongoose.Schema({
  percentage: {
    type: Number,
    required: true,
  },
  marksObtained: {
    type: Number,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minLength: [5, 'Minimum length should be 5 characters'],
    maxLength: [50, 'Minimum length should be 50 characters'],
  },
  address: {
    type: String,
    required: true,
    minLength: [5, 'Minimum length should be 5 characters'],
    maxLength: [255, 'Minimum length should be 255 characters'],
  },
  Fees: FeesType,
  Result: ResultType,
  status: String,
});

module.exports = studentSchema;
