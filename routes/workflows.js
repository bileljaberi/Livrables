const express = require('express');
const router = express.Router();
const workflowController = require('../controllers/workflowController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize('admin'), workflowController.createWorkflow);
router.get('/', authenticate, authorize('admin'), workflowController.getAllWorkflows);
router.get('/:id', authenticate, authorize('admin'), workflowController.getWorkflowById);
router.put('/:id', authenticate, authorize('admin'), workflowController.updateWorkflow);
router.delete('/:id', authenticate, authorize('admin'), workflowController.deleteWorkflow);

module.exports = router;