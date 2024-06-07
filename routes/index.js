const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');
const projectRoutes = require('./projects');
const employeeRoutes = require('./employees');
const externalEntityRoutes = require('./externalEntities');
const externalPersons = require('./externalPersons');
const paymentTypeRoutes = require('./paymentTypes');
const deliverableRoutes = require('./deliverables');
/*const phaseRoutes = require('./phases');
const deliverableTypeRoutes = require('./deliverableTypes');
const deliverableFormatRoutes = require('./deliverableFormats');
const deliverableCategoryRoutes = require('./deliverableCategories');
const workflowRoutes = require('./workflows');
const docBibleRoutes = require('./docBibles');*/

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/employees', employeeRoutes);
router.use('/externalEntities', externalEntityRoutes);
router.use('/externalPersons', externalPersons);
router.use('/deliverables', deliverableRoutes);
router.use('/paymentTypes', paymentTypeRoutes);
/*router.use('/phases', phaseRoutes);
router.use('/deliverableTypes', deliverableTypeRoutes);
router.use('/deliverableFormats', deliverableFormatRoutes);
router.use('/deliverableCategories', deliverableCategoryRoutes);
router.use('/workflows', workflowRoutes);
router.use('/docBibles', docBibleRoutes);*/

module.exports = router;