const Workflow = require('../models/Workflow');

// Créer un nouveau workflow
exports.createWorkflow = async (req, res) => {
    const { name, status, consultativeAdminId, decisiveSuperAdminId } = req.body;
    try {
        const newWorkflow = await Workflow.create({ name, status, consultativeAdminId, decisiveSuperAdminId });
        res.status(201).json(newWorkflow);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir tous les workflows
exports.getAllWorkflows = async (req, res) => {
    try {
        const workflows = await Workflow.findAll();
        res.status(200).json(workflows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir un workflow par ID
exports.getWorkflowById = async (req, res) => {
    const { id } = req.params;
    try {
        const workflow = await Workflow.findByPk(id);
        if (workflow) {
            res.status(200).json(workflow);
        } else {
            res.status(404).json({ error: 'Workflow not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un workflow
exports.updateWorkflow = async (req, res) => {
    const { id } = req.params;
    const { name, status, consultativeAdminId, decisiveSuperAdminId } = req.body;
    try {
        const workflow = await Workflow.findByPk(id);
        if (workflow) {
            workflow.name = name;
            workflow.status = status;
            workflow.consultativeAdminId = consultativeAdminId;
            workflow.decisiveSuperAdminId = decisiveSuperAdminId;
            await workflow.save();
            res.status(200).json(workflow);
        } else {
            res.status(404).json({ error: 'Workflow not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un workflow
exports.deleteWorkflow = async (req, res) => {
    const { id } = req.params;
    try {
        const workflow = await Workflow.findByPk(id);
        if (workflow) {
            await workflow.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Workflow not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};