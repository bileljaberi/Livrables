const express = require('express');
const router = express.Router();
const externalPersonController = require('../controllers/externalPersonController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), externalPersonController.createExternalPerson);
router.get('/', authenticate, authorize('admin'), externalPersonController.getAllExternalPersons);
router.get('/:id', authenticate, authorize('admin'), externalPersonController.getExternalPersonById);
router.put('/:id', authenticate, authorize('admin'), externalPersonController.updateExternalPerson);
router.delete('/:id', authenticate, authorize('admin'), externalPersonController.deleteExternalPerson);

module.exports = router;