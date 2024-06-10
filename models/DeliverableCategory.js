const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DeliverableCategory = sequelize.define('DeliverableCategory', {
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

module.exports = DeliverableCategory;