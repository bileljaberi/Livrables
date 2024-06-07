const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User');
const Project = require('./Project');
const Employee = require('./Employee');
const ExternalEntity = require('./ExternalEntity');
const ExternalPerson = require('./ExternalPerson');
const PaymentType = require('./PaymentType');
const Deliverable = require('./Deliverable');

// Définir les relations ici

// Relation User - Project (one-to-many)
User.hasMany(Project, { foreignKey: 'userId' });
Project.belongsTo(User, { foreignKey: 'userId' });

// Relation Project - PaymentType (many-to-one)
Project.belongsTo(PaymentType, { foreignKey: 'paymentTypeId' });
PaymentType.hasMany(Project, { foreignKey: 'paymentTypeId' });

// Relation Deliverable - PaymentType (many-to-one)
Deliverable.belongsTo(PaymentType, { foreignKey: 'paymentTypeId' });
PaymentType.hasMany(Deliverable, { foreignKey: 'paymentTypeId' });

const db = {
    sequelize,
    Sequelize,
    User,
    Project,
    Employee,
    ExternalEntity,
    ExternalPerson,
    PaymentType,
    Deliverable,
    // Ajouter d'autres modèles ici
};

module.exports = db;