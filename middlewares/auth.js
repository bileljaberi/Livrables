const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded); // Ajout de logs pour vérifier le contenu du jeton
        req.user = decoded; // Attache les informations décodées à req.user
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};