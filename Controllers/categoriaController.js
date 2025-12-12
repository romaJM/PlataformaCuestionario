const Categoria = require('../Models/categoria');


const getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getCategoriaById = async (req, res) => {
  const { id } = req.params;

  try {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// CREATE
const createCategoria = async (req, res) => {
  console.log("BODY RECIBIDO:", req.body);

  try {
    const data = req.body;

    //validacion
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        if (!data[i].nombre_categoria || typeof data[i].nombre_categoria !== "string") {
          return res.status(400).json({
            error: `El campo 'nombre' es obligatorio en el objeto ${i + 1}`
          });
        }
      }

      const categorias = await Categoria.bulkCreate(data);
      return res.status(201).json(categorias);
    }

    // validacion 
    if (!data.nombre_categoria || typeof data.nombre_categoria !== "string") {
      return res.status(400).json({
        error: "El campo 'nombre' es obligatorio y debe ser un texto"
      });
    }

    const nuevaCategoria = await Categoria.create(data);
    res.status(201).json(nuevaCategoria);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const updateCategoria = async (req, res) => {
  const { id } = req.params;

  try {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    const { nombre, descripcion } = req.body;

    if (nombre !== undefined) {
      if (typeof nombre !== "string" || nombre.trim() === "") {
        return res.status(400).json({
          error: "El nombre debe ser un texto válido"
        });
      }
    }

    await categoria.update(req.body);
    res.json(categoria);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteCategoria = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser numérico" });
  }

  try {
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    await categoria.destroy();
    res.json({ message: 'Categoría eliminada correctamente' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria
};
