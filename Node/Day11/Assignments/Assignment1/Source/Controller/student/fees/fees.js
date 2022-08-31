const express = require('express');
const router = express.Router({ mergeParams: true });
const Student = require('../../../Crud/studentCrud');

router.get('/', Student.getFees);
router.patch('/', Student.updateFees);
module.exports = router;
