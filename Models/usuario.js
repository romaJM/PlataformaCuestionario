const { DataTypes } = require('sequelize');
const sequelize = require('../config/conection');
const Rol = require('./rol');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  nombre_usuario: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  correo: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  
});


Usuario.belongsTo(Rol, {
  foreignKey: 'id_rol'
});

module.exports = Usuario;
