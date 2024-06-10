const DeliverableCategory = require('../models/DeliverableCategory');

// Créer une nouvelle catégorie de livrable
exports.createDeliverableCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const newDeliverableCategory = await DeliverableCategory.create({ name });
        res.status(201).json(newDeliverableCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir toutes les catégories de livrables
exports.getAllDeliverableCategories = async (req, res) => {
    try {
        const deliverableCategories = await DeliverableCategory.findAll();
        res.status(200).json(deliverableCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir une catégorie de livrable par ID
exports.getDeliverableCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const deliverableCategory = await DeliverableCategory.findByPk(id);
        if (deliverableCategory) {
            res.status(200).json(deliverableCategory);
        } else {
            res.status(404).json({ error: 'Deliverable category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour une catégorie de livrable
exports.updateDeliverableCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const deliverableCategory = await DeliverableCategory.findByPk(id);
        if (deliverableCategory) {
            deliverableCategory.name = name;
            await deliverableCategory.save();
            res.status(200).json(deliverableCategory);
        } else {
            res.status(404).json({ error: 'Deliverable category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer une catégorie de livrable
exports.deleteDeliverableCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const deliverableCategory = await DeliverableCategory.findByPk(id);
        if (deliverableCategory) {
            await deliverableCategory.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Deliverable category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};