const express = require('express');
const router = express.Router();
const deliverableController = require('../controllers/deliverableController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), deliverableController.createDeliverable);
router.get('/', authenticate, authorize('admin'), deliverableController.getAllDeliverables);
router.get('/:id', authenticate, authorize('admin'), deliverableController.getDeliverableById);
router.put('/:id', authenticate, authorize('admin'), deliverableController.updateDeliverable);
router.delete('/:id', authenticate, authorize('admin'), deliverableController.deleteDeliverable);

module.exports = router;