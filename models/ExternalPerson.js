const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ExternalEntity = require('./ExternalEntity');

const ExternalPerson = sequelize.define('ExternalPerson', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    externalEntityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ExternalEntity,
            key: 'id'
        }
    }
}, {
    timestamps: true
});

ExternalEntity.hasMany(ExternalPerson, { foreignKey: 'externalEntityId' });
ExternalPerson.belongsTo(ExternalEntity, { foreignKey: 'externalEntityId' });

module.exports = ExternalPerson;