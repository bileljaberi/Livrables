const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const PaymentType = require('./PaymentType');

const Deliverable = sequelize.define('Deliverable', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    paymentTypeId: {
        type: DataTypes.INTEGER,
        references: {
            model: PaymentType,
            key: 'id'
        }
    }
}, {
    timestamps: true
});

// Définir la relation
Deliverable.belongsTo(PaymentType, { foreignKey: 'paymentTypeId' });
PaymentType.hasMany(Deliverable, { foreignKey: 'paymentTypeId' });

module.exports = Deliverable;