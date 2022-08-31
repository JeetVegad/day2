const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: [10, 'Minimum length should be 5 characters'],
  },
  assistants: [
    {
      type: String,
      required: true,
    },
  ],
});
module.exports = mongoose.model('Department', departmentSchema);
