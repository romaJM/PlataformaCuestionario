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
  try {
    const subcategoria = await Subcategoria.findByPk(id);

    if (!subcategoria) {
      return res.status(404).json({ message: 'Subcategoría no encontrada' });
    }

    res.json(subcategoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE (uno o varios)
const createSubcategoria = async (req, res) => {
  try {
    const data = req.body;

    // Validación mínima
    const validateItem = item => item.id_categoria && item.nombre_subcategoria;

    if (Array.isArray(data)) {
      const invalid = data.filter(i => !validateItem(i));
      if (invalid.length) {
        return res.status(400).json({ message: 'Algunas subcategorías tienen campos inválidos', invalid });
      }
      const subcategorias = await Subcategoria.bulkCreate(data);
      return res.status(201).json(subcategorias);
    }

    if (!validateItem(data)) {
      return res.status(400).json({ message: 'id_categoria y nombre_subcategoria son obligatorios' });
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

  try {
    const subcategoria = await Subcategoria.findByPk(id);

    if (!subcategoria) {
      return res.status(404).json({ message: 'Subcategoría no encontrada' });
    }

    // Evitar actualizar campos obligatorios a null
    const { nombre_subcategoria, id_categoria, descripcion, activo } = req.body;
    await subcategoria.update({
      nombre_subcategoria: nombre_subcategoria ?? subcategoria.nombre_subcategoria,
      id_categoria: id_categoria ?? subcategoria.id_categoria,
      descripcion: descripcion ?? subcategoria.descripcion,
      activo: activo ?? subcategoria.activo
    });

    res.json(subcategoria);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteSubcategoria = async (req, res) => {
  const { id } = req.params;

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
