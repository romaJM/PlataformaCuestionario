const { DataTypes } = require('sequelize');
const sequelize = require('../config/conection');
const Rol = require('./rol');
const bcrypt = require('bcryptjs');

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
  timestamps: false,
  
  hooks: {
    //  Se ejecuta antes de crear el usuario
    beforeCreate: async (usuario) => {
      if (usuario.password) {
        usuario.password = await bcrypt.hash(usuario.password, 10);
      }
    },

    //  por si elusuario cambia la contraseña
    /*beforeUpdate: async (usuario) => {
      if (usuario.changed('password')) {
        usuario.password = await bcrypt.hash(usuario.password, 10);
      }
    }*/
  }
});

Usuario.belongsTo(Rol, {
  foreignKey: 'id_rol'
});

module.exports = Usuario;
