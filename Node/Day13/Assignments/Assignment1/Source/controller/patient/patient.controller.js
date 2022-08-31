
const express = require('express');
const Patient = require('../../domain/patient.domain');
const router = express.Router();

router.post('/', Patient.addPatient);
router.get('/', Patient.getPatients);
router.get('/:id/drugsList', Patient.getDrugsList);
router.get('/:id/summary', Patient.getPatientSummary);
module.exports = router;
