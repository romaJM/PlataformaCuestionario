

const Dificultad = require('../Models/dificultad.js'); 


const createDificultad = async (req, res) => {
  try {
    const { tipoDificultad } = req.body;
    
    if (!tipoDificultad) {
      return res.status(400).json({
        success: false,
        message: 'El campo tipoDificultad es obligatorio'
      });
    }

    const nuevaDificultad = await Dificultad.create({
      tipoDificultad: tipoDificultad.trim()
    });

    res.status(201).json({
      success: true,
      message: 'creacion exitosa',
      data: nuevaDificultad
    });
  } catch (error) {
    console.error('Error al crear dificultad:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el  servidor',
      error: error.message
    });
  }
};


const getAllDificultades = async (req, res) => {
  try {
    const dificultades = await Dificultad.findAll({
      order: [['id', 'ASC']]
    });

    res.status(200).json({
      success: true,
      data: dificultades
    });
  } catch (error) {
    console.error('Error al obtener dificultades:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};


const getDificultadById = async (req, res) => {
  try {
    const { id } = req.params;

    const dificultad = await Dificultad.findByPk(id);

    if (!dificultad) {
      return res.status(404).json({
        success: false,
        message: 'Dificultad no encontrada'
      });
    }

    res.status(200).json({
      success: true,
      data: dificultad
    });
  } catch (error) {
    console.error('Error al obtener dificultad:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};


const updateDificultad = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipoDificultad } = req.body;

    const dificultad = await Dificultad.findByPk(id);

    if (!dificultad) {
      return res.status(404).json({
        success: false,
        message: 'Dificultad no encontrada'
      });
    }

    if (!tipoDificultad) {
      return res.status(400).json({
        success: false,
        message: 'El campo tipoDificultad es requerido'
      });
    }

    await Dificultad.update(
      { tipoDificultad: tipoDificultad.trim() },
      { where: { id } }
    );

    const dificultadActualizada = await Dificultad.findByPk(id);

    res.status(200).json({
      success: true,
      message: 'Dificultad actualizada exitosamente',
      data: dificultadActualizada
    });
  } catch (error) {
    console.error('Error al actualizar dificultad:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};


const deleteDificultad = async (req, res) => {
  try {
    const { id } = req.params;

    const dificultad = await Dificultad.findByPk(id);

    if (!dificultad) {
      return res.status(404).json({
        success: false,
        message: 'Dificultad no encontrada'
      });
    }

    await Dificultad.destroy({ where: { id } });

    res.status(200).json({
      success: true,
      message: 'Dificultad eliminada exitosamente'
    });
  } catch (error) {
    console.error('Error al eliminar dificultad:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};

module.exports = {
  createDificultad,
  getAllDificultades,
  getDificultadById,
  updateDificultad,
  deleteDificultad
};