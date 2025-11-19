const sequelize = require('./config/conection');
require('./Models/dificultad'); 

async function start() {
  await sequelize.authenticate();
  console.log("Conectado a MySQL");

  await sequelize.sync({ alter: true });
  console.log("Tablas creadas/actualizadas");
}

start();
