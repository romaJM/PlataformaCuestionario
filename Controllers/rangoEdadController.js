const RangoEdad = require('../Models/rangoEdad.js');


const createRangoEdad = async (req, res) => {
  const { rango, edadMinima, edadMaxima } = req.body;

  if (!rango || rango.trim() === "" || edadMinima === undefined || edadMaxima === undefined) {
    return res.status(400).json({ 
      success: false, 
      message: 'Todos los campos son obligatorios'
    });
  }

  try {
    const nuevoRango = await RangoEdad.create({ rango, edadMinima, edadMaxima });
    res.status(201).json({ success: true, data: nuevoRango });
  } catch (error) {
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ success: false, message: error.errors[0].message });
    }
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

// Actualizar rango de edad
const updateRangoEdad = async (req, res) => {
  const { id } = req.params;
  const { rango, edadMinima, edadMaxima } = req.body;

  if (!rango || rango.trim() === "" || edadMinima === undefined || edadMaxima === undefined) {
    return res.status(400).json({ 
      success: false, 
      message: 'Todos los campos son obligatorios'
    });
  }

  try {
    const rangoExistente = await RangoEdad.findByPk(id);
    if (!rangoExistente) return res.status(404).json({ success: false, message: 'Rango de edad no encontrado' });

    await rangoExistente.update({ rango, edadMinima, edadMaxima });
    res.json({ success: true, data: rangoExistente });
  } catch (error) {
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ success: false, message: error.errors[0].message });
    }
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

// Obtener todos los rangos de edad
const getAllRangosEdad = async (req, res) => {
  try {
    const rangosEdad = await RangoEdad.findAll();
    res.json({ success: true, data: rangosEdad });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

// Obtener rango por ID
const getRangoEdadById = async (req, res) => {
  const { id } = req.params;
  try {
    const rango = await RangoEdad.findByPk(id);
    if (!rango) return res.status(404).json({ success: false, message: 'Rango de edad no encontrado' });
    res.json({ success: true, data: rango });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

// Eliminar rango de edad
const deleteRangoEdad = async (req, res) => {
  const { id } = req.params;
  try {
    const rango = await RangoEdad.findByPk(id);
    if (!rango) return res.status(404).json({ success: false, message: 'Rango de edad no encontrado' });

    await rango.destroy();
    res.json({ success: true, message: 'Rango de edad eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

module.exports = {
  createRangoEdad,
  updateRangoEdad,
  getAllRangosEdad,
  getRangoEdadById,
  deleteRangoEdad
};