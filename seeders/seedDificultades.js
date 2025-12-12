const Rol = require('../Models/dificultad');

async function seedDificultades() {
  await Rol.bulkCreate([

    { tipoDificultad: 'medio' }

  ], { ignoreDuplicates: true });

  console.log('tipos de  dificultad creados ');
}

module.exports = seedDificultades;