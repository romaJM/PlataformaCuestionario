const Rol = require('../Models/rangoEdad');

async function seedRangos() {
  await Rol.bulkCreate([
    {   rango: '10-12',
        edadMinima:10,
        edadMaxima:12
     },
    {   
        rango: '13-15',
        edadMinima:13,
        edadMaxima:18 
    }
  ], { ignoreDuplicates: true });

  console.log('rangos creados ');
}

module.exports = seedRangos;