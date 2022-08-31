const express = require('express');
const mongoose = require('mongoose');
const employee = require('./Controller/employee');
const student = require('./Controller/student/studentControler');
mongoose
  .connect('mongodb://localhost/assignment11')
  .then(() => {
    console.log('mongodb connected...');
  })
  .catch((error) => console.log(error));
const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use('/emps', employee);
app.use('/stds', student);
app.use((error, _req, res, _next) => {
  if (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen(3000, () => {
  console.log('listening on port 3000');
});
