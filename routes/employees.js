const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), employeeController.createEmployee);
router.get('/', authenticate, authorize('admin'), employeeController.getAllEmployees);
router.get('/:id', authenticate, authorize('admin'), employeeController.getEmployeeById);
router.put('/:id', authenticate, authorize('admin'), employeeController.updateEmployee);
router.delete('/:id', authenticate, authorize('admin'), employeeController.deleteEmployee);

module.exports = router;