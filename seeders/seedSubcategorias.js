const Subcategoria = require('../Models/subcategoria');

async function seedSubcategorias() {
  await Subcategoria.bulkCreate([
    {
      id_categoria: 1, 
      nombre_subcategoria: "Programación de robots",
      descripcion: "Creación de algoritmos para controlar robots y automatización.",
      activo: true
    },
    {
      id_categoria: 2, 
      nombre_subcategoria: "Mecánica",
      descripcion: "Estudio del movimiento y fuerzas que actúan sobre los cuerpos.",
      activo: true
    },
    {
      id_categoria: 3, 
      nombre_subcategoria: "Genética",
      descripcion: "Estudio de la herencia y variación de los organismos.",
      activo: true
    }
  ], { ignoreDuplicates: true });

  console.log('Subcategorías iniciales creadas (sin Química)');
}

module.exports = seedSubcategorias;
