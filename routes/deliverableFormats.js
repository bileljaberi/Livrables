const express = require('express');
const router = express.Router();
const deliverableFormatController = require('../controllers/deliverableFormatController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), deliverableFormatController.createDeliverableFormat);
router.get('/', authenticate, authorize('admin'), deliverableFormatController.getAllDeliverableFormats);
router.get('/:id', authenticate, authorize('admin'), deliverableFormatController.getDeliverableFormatById);
router.put('/:id', authenticate, authorize('admin'), deliverableFormatController.updateDeliverableFormat);
router.delete('/:id', authenticate, authorize('admin'), deliverableFormatController.deleteDeliverableFormat);

module.exports = router;