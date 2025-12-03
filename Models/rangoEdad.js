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
    allowNull: false,
    unique: {
      msg: 'Este rango ya existe'
    },
    set(value) {
      this.setDataValue('rango', value.trim());
    },
    validate: {
      notNull: { msg: 'El nombre del rango es obligatorio' },
      notEmpty: { msg: 'El nombre del rango no puede estar vacío' },
      len: { args: [3, 50], msg: 'El nombre del rango debe tener entre 3 y 50 caracteres' }
    }
  },
  edadMinima: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: 'La edad mínima debe ser un número entero' },
      min: { args: [0], msg: 'La edad mínima debe ser 0 o mayor' }
    }
  },
  edadMaxima: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: 'La edad máxima debe ser un número entero' },
      min: { args: [0], msg: 'La edad máxima debe ser 0 o mayor' },
      isGreaterThanMin(value) {
        if (value < this.edadMinima) {
          throw new Error('La edad máxima debe ser mayor o igual a la edad mínima');
        }
      }
    }
  }
});

module.exports = RangoEdad;