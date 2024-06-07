const ExternalEntity = require('../models/ExternalEntity');
const ExternalPerson = require('../models/ExternalPerson');

// Créer une nouvelle personne externe
exports.createExternalPerson = async (req, res) => {
    const { firstName, lastName, email, phone, externalEntityId } = req.body;
    try {
        const newExternalPerson = await ExternalPerson.create({ firstName, lastName, email, phone, externalEntityId });
        res.status(201).json(newExternalPerson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir toutes les personnes externes
exports.getAllExternalPersons = async (req, res) => {
    try {
        const externalPersons = await ExternalPerson.findAll({ include: { model: ExternalEntity} });
        res.status(200).json(externalPersons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir une personne externe par ID
exports.getExternalPersonById = async (req, res) => {
    const { id } = req.params;
    try {
        const externalPerson = await ExternalPerson.findByPk(id);
        if (externalPerson) {
            res.status(200).json(externalPerson);
        } else {
            res.status(404).json({ error: 'ExternalPerson not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour une personne externe
exports.updateExternalPerson = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phone, externalEntityId } = req.body;
    try {
        const externalPerson = await ExternalPerson.findByPk(id);
        if (externalPerson) {
            externalPerson.firstName = firstName;
            externalPerson.lastName = lastName;
            externalPerson.email = email;
            externalPerson.phone = phone;
            externalPerson.externalEntityId = externalEntityId;
            await externalPerson.save();
            res.status(200).json(externalPerson);
        } else {
            res.status(404).json({ error: 'ExternalPerson not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer une personne externe
exports.deleteExternalPerson = async (req, res) => {
    const { id } = req.params;
    try {
        const externalPerson = await ExternalPerson.findByPk(id);
        if (externalPerson) {
            await externalPerson.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'ExternalPerson not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};