const express = require('express');
const router = express.Router();
const externalEntityController = require('../controllers/externalEntityController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), externalEntityController.createExternalEntity);
router.get('/', authenticate, authorize('admin'), externalEntityController.getAllExternalEntities);
router.get('/:id', authenticate, authorize('admin'), externalEntityController.getExternalEntityById);
router.put('/:id', authenticate, authorize('admin'), externalEntityController.updateExternalEntity);
router.delete('/:id', authenticate, authorize('admin'), externalEntityController.deleteExternalEntity);

module.exports = router;