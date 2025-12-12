const Rol = require('../Models/dificultad');

async function seedDificultades() {
  await Rol.bulkCreate([
    { tipoDificultad: 'facil' },
    { tipoDificultad: 'medio' },
    { tipoDificultad: 'dificil' }
  ], { ignoreDuplicates: true });

  console.log('tipos de  dificultad creados ');
}

module.exports = seedDificultades;