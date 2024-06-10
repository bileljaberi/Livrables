const express = require('express');
const router = express.Router();
const deliverableTypeController = require('../controllers/deliverableTypeController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), deliverableTypeController.createDeliverableType);
router.get('/', authenticate, authorize('admin'), deliverableTypeController.getAllDeliverableTypes);
router.get('/:id', authenticate, authorize('admin'), deliverableTypeController.getDeliverableTypeById);
router.put('/:id', authenticate, authorize('admin'), deliverableTypeController.updateDeliverableType);
router.delete('/:id', authenticate, authorize('admin'), deliverableTypeController.deleteDeliverableType);

module.exports = router;