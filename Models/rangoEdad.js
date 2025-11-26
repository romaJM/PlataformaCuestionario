
const { DataTypes } = require('sequelize');
const sequelize = require('../config/conection');

const RangoEdad = sequelize.define('Rango', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rango: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edadMinima: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  edadMaxima: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = RangoEdad;