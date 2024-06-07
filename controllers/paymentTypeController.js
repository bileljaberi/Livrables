const PaymentType = require('../models/PaymentType');

// Créer un nouveau type de paiement
exports.createPaymentType = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newPaymentType = await PaymentType.create({ name, description });
        res.status(201).json(newPaymentType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir tous les types de paiement
exports.getAllPaymentTypes = async (req, res) => {
    try {
        const paymentTypes = await PaymentType.findAll();
        res.status(200).json(paymentTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir un type de paiement par ID
exports.getPaymentTypeById = async (req, res) => {
    const { id } = req.params;
    try {
        const paymentType = await PaymentType.findByPk(id);
        if (paymentType) {
            res.status(200).json(paymentType);
        } else {
            res.status(404).json({ error: 'PaymentType not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un type de paiement
exports.updatePaymentType = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const paymentType = await PaymentType.findByPk(id);
        if (paymentType) {
            paymentType.name = name;
            paymentType.description = description;
            await paymentType.save();
            res.status(200).json(paymentType);
        } else {
            res.status(404).json({ error: 'PaymentType not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un type de paiement
exports.deletePaymentType = async (req, res) => {
    const { id } = req.params;
    try {
        const paymentType = await PaymentType.findByPk(id);
        if (paymentType) {
            await paymentType.destroy();
            res.json({message:"deleted"}).status(204);
        } else {
            res.status(404).json({ error: 'PaymentType not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};