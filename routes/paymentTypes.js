const express = require('express');
const router = express.Router();
const paymentTypeController = require('../controllers/paymentTypeController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), paymentTypeController.createPaymentType);
router.get('/', authenticate, authorize('admin'), paymentTypeController.getAllPaymentTypes);
router.get('/:id', authenticate, authorize('admin'), paymentTypeController.getPaymentTypeById);
router.put('/:id', authenticate, authorize('admin'), paymentTypeController.updatePaymentType);
router.delete('/:id', authenticate, authorize('admin'), paymentTypeController.deletePaymentType);

module.exports = router;