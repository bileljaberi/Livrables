const express = require('express');
const router = express.Router();
const docBibleController = require('../controllers/docBibleController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), docBibleController.createDocBible);
router.get('/', authenticate, authorize('admin'), docBibleController.getAllDocBibles);
router.get('/:id', authenticate, authorize('admin'), docBibleController.getDocBibleById);
router.put('/:id', authenticate, authorize('admin'), docBibleController.updateDocBible);
router.delete('/:id', authenticate, authorize('admin'), docBibleController.deleteDocBible);

module.exports = router;