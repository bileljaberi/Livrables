const express = require('express');
const router = express.Router();
const deliverableCategoryController = require('../controllers/deliverableCategoryController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), deliverableCategoryController.createDeliverableCategory);
router.get('/', authenticate, authorize('admin'), deliverableCategoryController.getAllDeliverableCategories);
router.get('/:id', authenticate, authorize('admin'), deliverableCategoryController.getDeliverableCategoryById);
router.put('/:id', authenticate, authorize('admin'), deliverableCategoryController.updateDeliverableCategory);
router.delete('/:id', authenticate, authorize('admin'), deliverableCategoryController.deleteDeliverableCategory);

module.exports = router;