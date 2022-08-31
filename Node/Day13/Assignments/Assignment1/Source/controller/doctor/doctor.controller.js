const express = require('express');
const Doctor = require('../../domain/doctor.domain');
const router = express.Router();

router.post('/department', Doctor.addDepartment);
router.post('/', Doctor.addDoctor);
router.get('/', Doctor.getDoctors);
router.delete('/:id', Doctor.deleteDoctor);
router.put('/:id', Doctor.updateDoctor);
router.get('/:id/patientReport', Doctor.getPatientReport);
router.get('/:id/summary', Doctor.getDoctorSummary);
module.exports = router;
    