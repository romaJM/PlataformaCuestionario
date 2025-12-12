const sequelize = require('../config/conection');
const seedRoles = require('./seederRol');
const seedUsuarios = require('./seederUsuarios');
const seedDificultades=require('./seedDificultades');
const seedRangos=require('./seedRangos');
const seedCategorias=require('./seedCategorias');
const seedSubcategorias=require('./seedSubcategorias');

async function runSeeders() {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la DB');

    await seedRoles();
    await seedUsuarios();
    await seedDificultades();
    await seedRangos();
    await seedCategorias();
    await seedSubcategorias();

    console.log('Todos los seeders ejecutados correctamente');
    process.exit(0);
  } catch (error) {
    console.error('Error al ejecutar seeders:', error);
    process.exit(1);
  }
}

runSeeders();
