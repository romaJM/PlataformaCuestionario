const { DataTypes } = require('sequelize');
const sequelize = require('../config/conection');

const Dificultad = sequelize.define('Dificultad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipoDificultad: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Dificultad;

