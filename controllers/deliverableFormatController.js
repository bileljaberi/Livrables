const DeliverableFormat = require('../models/DeliverableFormat');

// Créer un nouveau format de livrable
exports.createDeliverableFormat = async (req, res) => {
    const { name } = req.body;
    try {
        const newDeliverableFormat = await DeliverableFormat.create({ name });
        res.status(201).json(newDeliverableFormat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir tous les formats de livrables
exports.getAllDeliverableFormats = async (req, res) => {
    try {
        const deliverableFormats = await DeliverableFormat.findAll();
        res.status(200).json(deliverableFormats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir un format de livrable par ID
exports.getDeliverableFormatById = async (req, res) => {
    const { id } = req.params;
    try {
        const deliverableFormat = await DeliverableFormat.findByPk(id);
        if (deliverableFormat) {
            res.status(200).json(deliverableFormat);
        } else {
            res.status(404).json({ error: 'Deliverable format not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un format de livrable
exports.updateDeliverableFormat = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const deliverableFormat = await DeliverableFormat.findByPk(id);
        if (deliverableFormat) {
            deliverableFormat.name = name;
            await deliverableFormat.save();
            res.status(200).json(deliverableFormat);
        } else {
            res.status(404).json({ error: 'Deliverable format not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un format de livrable
exports.deleteDeliverableFormat = async (req, res) => {
    const { id } = req.params;
    try {
        const deliverableFormat = await DeliverableFormat.findByPk(id);
        if (deliverableFormat) {
            await deliverableFormat.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Deliverable format not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};