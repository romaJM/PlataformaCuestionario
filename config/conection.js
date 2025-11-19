const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proyecto_web', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
