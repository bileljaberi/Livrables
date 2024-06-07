module.exports = (role) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== role) {
            return res.status(403).json({ error: 'Access denied. You do not have the right permissions.' });
        }
        next();
    };
};