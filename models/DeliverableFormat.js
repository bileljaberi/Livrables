const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DeliverableFormat = sequelize.define('DeliverableFormat', {
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

module.exports = DeliverableFormat;