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
    allowNull: false,
    unique: {
      msg: 'Este tipo de dificultad ya existe'
    },
    set(value) {
      
      this.setDataValue('tipoDificultad', value.trim().toLowerCase());
    },
    validate: {
      notNull: { msg: 'El tipo de dificultad es obligatorio' },
      notEmpty: { msg: 'El tipo de dificultad no puede estar vacío' },
      len: {
        args: [3, 50],
        msg: 'El tipo de dificultad debe tener entre 3 y 50 caracteres'
      }
    }
  }
});

module.exports = Dificultad;

