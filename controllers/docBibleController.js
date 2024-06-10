const DocBible = require('../models/DocBible');

// Créer une nouvelle entrée DocBible
exports.createDocBible = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newDocBible = await DocBible.create({ name, description });
        res.status(201).json(newDocBible);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir toutes les entrées DocBible
exports.getAllDocBibles = async (req, res) => {
    try {
        const docBibles = await DocBible.findAll();
        res.status(200).json(docBibles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir une entrée DocBible par ID
exports.getDocBibleById = async (req, res) => {
    const { id } = req.params;
    try {
        const docBible = await DocBible.findByPk(id);
        if (docBible) {
            res.status(200).json(docBible);
        } else {
            res.status(404).json({ error: 'DocBible not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour une entrée DocBible
exports.updateDocBible = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const docBible = await DocBible.findByPk(id);
        if (docBible) {
            docBible.name = name;
            docBible.description = description;
            await docBible.save();
            res.status(200).json(docBible);
        } else {
            res.status(404).json({ error: 'DocBible not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer une entrée DocBible
exports.deleteDocBible = async (req, res) => {
    const { id } = req.params;
    try {
        const docBible = await DocBible.findByPk(id);
        if (docBible) {
            await docBible.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'DocBible not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};