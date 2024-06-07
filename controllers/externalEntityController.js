const ExternalEntity = require('../models/ExternalEntity');

// Créer une nouvelle entité externe
exports.createExternalEntity = async (req, res) => {
    const { name, type, contactPerson, email, phone, address } = req.body;
    try {
        const newExternalEntity = await ExternalEntity.create({ name, type, contactPerson, email, phone, address });
        res.status(201).json(newExternalEntity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir toutes les entités externes
exports.getAllExternalEntities = async (req, res) => {
    try {
        const externalEntities = await ExternalEntity.findAll();
        res.status(200).json(externalEntities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir une entité externe par ID
exports.getExternalEntityById = async (req, res) => {
    const { id } = req.params;
    try {
        const externalEntity = await ExternalEntity.findByPk(id);
        if (externalEntity) {
            res.status(200).json(externalEntity);
        } else {
            res.status(404).json({ error: 'ExternalEntity not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour une entité externe
exports.updateExternalEntity = async (req, res) => {
    const { id } = req.params;
    const { name, type, contactPerson, email, phone, address } = req.body;
    try {
        const externalEntity = await ExternalEntity.findByPk(id);
        if (externalEntity) {
            externalEntity.name = name;
            externalEntity.type = type;
            externalEntity.contactPerson = contactPerson;
            externalEntity.email = email;
            externalEntity.phone = phone;
            externalEntity.address = address;
            await externalEntity.save();
            res.status(200).json(externalEntity);
        } else {
            res.status(404).json({ error: 'ExternalEntity not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer une entité externe
exports.deleteExternalEntity = async (req, res) => {
    const { id } = req.params;
    try {
        const externalEntity = await ExternalEntity.findByPk(id);
        if (externalEntity) {
            await externalEntity.destroy();
            res.json({message:'deleted'});
        } else {
            res.status(404).json({ error: 'ExternalEntity not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};