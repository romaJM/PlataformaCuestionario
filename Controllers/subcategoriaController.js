const Subcategoria = require('../Models/subcategoria');

// GET ALL
const getAllSubcategorias = async (req, res) => {
  try {
    const subcategorias = await Subcategoria.findAll();
    res.json(subcategorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET BY ID
const getSubcategoriaById = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser numérico" });
  }

  try {
    const subcategoria = await Subcategoria.findByPk(id);
    if (!subcategoria) {
      return res.status(404).json({ message: "Subcategoría no encontrada" });
    }

    res.json(subcategoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createSubcategoria = async (req, res) => {
  console.log("BODY RECIBIDO:", req.body);

  try {
    const data = req.body;

    // validacion lotes(?
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (!item.nombre_subcategoria || typeof item.nombre_subcategoria !== "string") {
          return res.status(400).json({
            error: `El campo 'nombre_subcategoria' es obligatorio y debe ser texto (objeto ${i + 1})`
          });
        }

        if (!item.id_categoria || isNaN(item.id_categoria)) {
          return res.status(400).json({
            error: `El campo 'id_categoria' es obligatorio y debe ser numérico (objeto ${i + 1})`
          });
        }
      }

      const subcategorias = await Subcategoria.bulkCreate(data);
      return res.status(201).json(subcategorias);
    }

    // validacion
    if (!data.nombre_subcategoria || typeof data.nombre_subcategoria !== "string") {
      return res.status(400).json({
        error: "El campo 'nombre_subcategoria' es obligatorio y debe ser un texto"
      });
    }

    if (!data.id_categoria || isNaN(data.id_categoria)) {
      return res.status(400).json({
        error: "El campo 'id_categoria' es obligatorio y debe ser numérico"
      });
    }

    const nuevaSubcategoria = await Subcategoria.create(data);
    res.status(201).json(nuevaSubcategoria);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
const updateSubcategoria = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser numérico" });
  }

  try {
    const subcategoria = await Subcategoria.findByPk(id);
    if (!subcategoria) {
      return res.status(404).json({ message: "Subcategoría no encontrada" });
    }

    const { nombre_subcategoria, id_categoria, descripcion, activo } = req.body;

    // Validación de nombre
    if (nombre_subcategoria !== undefined) {
      if (typeof nombre_subcategoria !== "string" || nombre_subcategoria.trim() === "") {
        return res.status(400).json({
          error: "El campo 'nombre_subcategoria' debe ser un texto válido"
        });
      }
    }

    // validacion de categoría
    if (id_categoria !== undefined) {
      if (isNaN(id_categoria)) {
        return res.status(400).json({
          error: "El campo 'id_categoria' debe ser numérico"
        });
      }
    }

    await subcategoria.update(req.body);
    res.json(subcategoria);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteSubcategoria = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser numérico" });
  }

  try {
    const subcategoria = await Subcategoria.findByPk(id);
    if (!subcategoria) {
      return res.status(404).json({ message: 'Subcategoría no encontrada' });
    }

    await subcategoria.destroy();
    res.json({ message: 'Subcategoría eliminada correctamente' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSubcategorias,
  getSubcategoriaById,
  createSubcategoria,
  updateSubcategoria,
  deleteSubcategoria
};
