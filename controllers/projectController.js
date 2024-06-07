const Project = require('../models/Project');
const User = require('../models/User');

// Obtenir tous les projets
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll({ include: { model: User, as: 'admin' } });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Créer un nouveau projet
exports.createProject = async (req, res) => {
    const { name, description, startDate, endDate, adminId } = req.body;
    try {
        const admin = await User.findByPk(adminId);
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        const project = await Project.create({ name, description, startDate, endDate, adminId });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir un projet par ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id, { include: { model: User, as: 'admin' } });
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ error: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un projet
exports.updateProject = async (req, res) => {
    const { name, description, startDate, endDate, adminId } = req.body;
    try {
        const project = await Project.findByPk(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        const admin = await User.findByPk(adminId);
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        await project.update({ name, description, startDate, endDate, adminId });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un projet
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if (project) {
            await project.destroy();
            res.json({ message: 'Project deleted' });
        } else {
            res.status(404).json({ error: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};