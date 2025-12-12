const Categoria = require('../Models/categoria');

async function seedCategorias() {
  await Categoria.bulkCreate([
    {
      nombre_categoria: "Robotica",
      descripcion: "Preguntas sobre automatización, programación de robots y mecánica aplicada.",
      activo: true
    },
    {
      nombre_categoria: "Fisica",
      descripcion: "Preguntas sobre leyes de la física, energía, fuerzas y movimiento.",
      activo: true
    },
    {
      nombre_categoria: "Biologia",
      descripcion: "Preguntas sobre organismos vivos, anatomía, ecología y genética.",
      activo: true
    }
  ], { ignoreDuplicates: true }); 

  console.log('Categorías iniciales creadas');
}

module.exports = seedCategorias;
