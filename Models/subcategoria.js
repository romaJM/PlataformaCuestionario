const { DataTypes } = require('sequelize');
const sequelize = require('../config/conection');
const Categoria = require('./categoria');

const Subcategoria = sequelize.define('Subcategoria', {
  id_subcategoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre_subcategoria: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
},{
  tableName: 'subcategoria',
  timestamps: false
});

// Relación
Subcategoria.belongsTo(Categoria, {
  foreignKey: 'id_categoria'
});

module.exports = Subcategoria;
