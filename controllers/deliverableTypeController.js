const DeliverableType = require('../models/DeliverableType');

// Créer un nouveau type de livrable
exports.createDeliverableType = async (req, res) => {
    const { name } = req.body;
    try {
        const newDeliverableType = await DeliverableType.create({ name });
        res.status(201).json(newDeliverableType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir tous les types de livrables
exports.getAllDeliverableTypes = async (req, res) => {
    try {
        const deliverableTypes = await DeliverableType.findAll();
        res.status(200).json(deliverableTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir un type de livrable par ID
exports.getDeliverableTypeById = async (req, res) => {
    const { id } = req.params;
    try {
        const deliverableType = await DeliverableType.findByPk(id);
        if (deliverableType) {
            res.status(200).json(deliverableType);
        } else {
            res.status(404).json({ error: 'Deliverable type not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un type de livrable
exports.updateDeliverableType = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const deliverableType = await DeliverableType.findByPk(id);
        if (deliverableType) {
            deliverableType.name = name;
            await deliverableType.save();
            res.status(200).json(deliverableType);
        } else {
            res.status(404).json({ error: 'Deliverable type not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un type de livrable
exports.deleteDeliverableType = async (req, res) => {
    const { id } = req.params;
    try {
        const deliverableType = await DeliverableType.findByPk(id);
        if (deliverableType) {
            await deliverableType.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Deliverable type not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};