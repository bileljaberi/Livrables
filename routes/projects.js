const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

router.get('/', authenticate, authorize('admin'), projectController.getAllProjects);
router.post('/', authenticate,  projectController.createProject);
router.get('/:id', authenticate, authorize('admin'), projectController.getProjectById);
router.put('/:id', authenticate, authorize('admin'), projectController.updateProject);
router.delete('/:id', authenticate, authorize('admin'), projectController.deleteProject);

module.exports = router;