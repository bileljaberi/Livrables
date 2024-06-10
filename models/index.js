const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User');
const Project = require('./Project');
const Employee = require('./Employee');
const ExternalEntity = require('./ExternalEntity');
const ExternalPerson = require('./ExternalPerson');
const PaymentType = require('./PaymentType');
const Deliverable = require('./Deliverable');
const DeliverableType = require('./DeliverableType');
const DeliverableFormat = require('./DeliverableFormat');
const DeliverableCategory = require('./DeliverableCategory');
const Workflow = require('./Workflow');
const DocBible = require('./DocBible');

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

// Relation Deliverable - DeliverableType (many-to-one)
Deliverable.belongsTo(DeliverableType, { foreignKey: 'deliverableTypeId' });
DeliverableType.hasMany(Deliverable, { foreignKey: 'deliverableTypeId' });

// Relation Deliverable - DeliverableFormat (many-to-one)
Deliverable.belongsTo(DeliverableFormat, { foreignKey: 'deliverableFormatId' });
DeliverableFormat.hasMany(Deliverable, { foreignKey: 'deliverableFormatId' });

// Relation Deliverable - DeliverableCategory (many-to-one)
Deliverable.belongsTo(DeliverableCategory, { foreignKey: 'deliverableCategoryId' });
DeliverableCategory.hasMany(Deliverable, { foreignKey: 'deliverableCategoryId' });

// Relation Workflow - User (consultative admin and decisive super admin)
Workflow.belongsTo(User, { as: 'consultativeAdmin', foreignKey: 'consultativeAdminId' });
Workflow.belongsTo(User, { as: 'decisiveSuperAdmin', foreignKey: 'decisiveSuperAdminId' });

// Relation DocBible - Project (many-to-one)
DocBible.belongsTo(Project, { foreignKey: 'projectId' });
Project.hasMany(DocBible, { foreignKey: 'projectId' });

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
    DeliverableType,
    DeliverableFormat,
    DeliverableCategory,
    Workflow,
    DocBible,
    // Ajouter d'autres modèles ici
};

module.exports = db;