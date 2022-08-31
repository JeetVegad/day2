const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: [5, 'Minimum length should be 5 characters'],
  },
  doctors: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Doctor',
    },
  ],
  department: {
    type: mongoose.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  drugs: {
    morning: [
      {
        type: String,
        required: true,
      },
    ],
    afternoon: [
      {
        type: String,
        required: true,
      },
    ],

    night: [
      {
        type: String,
        required: true,
      },
    ],
  },
});

module.exports = mongoose.model('Patient', patientSchema);
