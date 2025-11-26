const rangoEdad = require('../Models/rangoEdad.js'); 


const getAllRangosEdad = async (req, res) => {
  try {
    const rangosEdad = await rangoEdad.findAll();
    res.json(rangosEdad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getRangoEdadById = async (req, res) => {
  const { id } = req.params;
  try {
    const rango = await rangoEdad.findByPk(id); 
    if (rango) {
      res.json(rango);
    } else {
      res.status(404).json({ error: 'Rango de edad no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createRangoEdad = async (req, res) => {
  const { rango, edadMinima, edadMaxima } = req.body;
  try {
    const nuevoRango = await rangoEdad.create({ rango, edadMinima, edadMaxima });
    res.status(201).json(nuevoRango);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateRangoEdad = async (req, res) => {
  const { id } = req.params;
  const { rango, edadMinima, edadMaxima } = req.body;
  try {
    const rangoExistente = await rangoEdad.findByPk(id); 
    if (rangoExistente) {
      await rangoExistente.update({ rango, edadMinima, edadMaxima });
      res.json(rangoExistente);
    } else {
      res.status(404).json({ error: 'Rango de edad no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteRangoEdad = async (req, res) => {
  const { id } = req.params;
  try {
    const rango = await rangoEdad.findByPk(id); // Cambié a "rangoEdad" (minúscula)
    if (rango) {
      await rango.destroy();
      res.json({ message: 'Rango de edad eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Rango de edad no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getAllRangosEdad,
  getRangoEdadById,
  createRangoEdad,
  updateRangoEdad,
  deleteRangoEdad,
  
};