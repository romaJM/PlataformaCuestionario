require('dotenv').config();
const sequelize = require('./config/conection');
require('./Models/dificultad'); 
require('./Models/rangoEdad');
require('./Models/categoria');


async function start() {
  await sequelize.authenticate();
  console.log("Conectado a MySQL");

  await sequelize.sync({ alter: true });
  console.log("Tablas creadas/actualizadas");
}

start();
