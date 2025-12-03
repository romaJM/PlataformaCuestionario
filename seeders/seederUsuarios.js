const Usuario = require('../Models/usuario');

async function seedUsuarios() {
  await Usuario.create({
    id_rol: 1, 
    nombre: 'Romane JM',
    nombre_usuario: 'roma',
    correo: 'admin@gmail.com',
    password: '12345' 
  });

  console.log('Usuario ADMIN creado');
}

module.exports = seedUsuarios;
