const express = require('express');
const router = express.Router({ mergeParams: true });
const Student = require('../../../Crud/studentCrud');

router.get('/', Student.getResult);
router.patch('/', Student.updateResult);
module.exports = router;
