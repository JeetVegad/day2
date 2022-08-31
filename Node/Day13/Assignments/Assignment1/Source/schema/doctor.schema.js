const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: [5, 'Minimum length should be 5 characters'],
  },
  department: {
    type: mongoose.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  patients: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Patient',
    },
  ],
});
module.exports = mongoose.model('Doctor', doctorSchema);
