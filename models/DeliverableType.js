const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DeliverableType = sequelize.define('DeliverableType', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = DeliverableType;