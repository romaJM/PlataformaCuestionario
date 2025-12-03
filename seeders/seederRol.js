const Rol = require('../Models/rol');

async function seedRoles() {
  await Rol.bulkCreate([
    { rol: 'admin' },
    { rol: 'evaluador' },
    { rol: 'editor' }
  ], { ignoreDuplicates: true });

  console.log('Roles creados');
}

module.exports = seedRoles;
