const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const patient = require('./controller/patient/patient.controller');
const doctor = require('./controller/doctor/doctor.controller');
const app = express();
app.disable("x-powered-by");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((e) => console.log(e));
app.use(express.json());
app.use('/patient', patient);
app.use('/doctor', doctor);
app.use((error, _req, res, _next) => {
  if (error) {
    res.status(500).json({ message: error.message });
  }
});
const port = process.eventNames.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
