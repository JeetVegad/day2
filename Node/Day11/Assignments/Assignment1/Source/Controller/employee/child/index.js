const express = require('express');
const router = express.Router({ mergeParams: true });
const Employee = require('../../../Crud/employeeCrud');

router.get('/', Employee.getAssignments);
router.get('/:id', Employee.getAssignmentById);
router.post('/', Employee.addAssignment);
router.put('/:id', Employee.updateAssignment);
module.exports = router;
