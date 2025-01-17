const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const projectRoutes = require('./routes/projects');
const employeeRoutes = require('./routes/employees');
const externalEntityRoutes = require('./routes/externalEntities');
const externalPersonRoutes = require('./routes/externalPersons');
const authRoutes = require('./routes/auth');
const sequelize = require('./config/database');

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/externalEntities', externalEntityRoutes);
app.use('/api/externalPersons', externalPersonRoutes);
app.use('/api/auth', authRoutes);

// Synchroniser la base de données
sequelize.sync()
    .then(() => console.log('Database synchronized'))
    .catch(error => console.log('Error synchronizing database:', error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;