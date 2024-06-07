const { PaymentType } = require('../models');
const Deliverable = require('../models/Deliverable');

// Créer un nouveau livrable
exports.createDeliverable = async (req, res) => {
    const { name, description, paymentTypeId } = req.body;
    try {
        const newDeliverable = await Deliverable.create({ name, description, paymentTypeId });
        res.status(201).json(newDeliverable);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir tous les livrables
exports.getAllDeliverables = async (req, res) => {
    try {
        const deliverables = await Deliverable.findAll({ include: { model: PaymentType} });
        res.status(200).json(deliverables);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir un livrable par ID
exports.getDeliverableById = async (req, res) => {
    const { id } = req.params;
    try {
        const deliverable = await Deliverable.findByPk(id);
        if (deliverable) {
            res.status(200).json(deliverable);
        } else {
            res.status(404).json({ error: 'Deliverable not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un livrable
exports.updateDeliverable = async (req, res) => {
    const { id } = req.params;
    const { name, description, paymentTypeId } = req.body;
    try {
        const deliverable = await Deliverable.findByPk(id);
        if (deliverable) {
            deliverable.name = name;
            deliverable.description = description;
            deliverable.paymentTypeId = paymentTypeId;
            await deliverable.save();
            res.status(200).json(deliverable);
        } else {
            res.status(404).json({ error: 'Deliverable not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un livrable
exports.deleteDeliverable = async (req, res) => {
    const { id } = req.params;
    try {
        const deliverable = await Deliverable.findByPk(id);
        if (deliverable) {
            await deliverable.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Deliverable not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};