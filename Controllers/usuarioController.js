const Usuario = require('../Models/usuario');
const Rol = require('../Models/rol');
const bcrypt = require('bcryptjs');


const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      include: [{ model: Rol }]
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUsuario = async (req, res) => {
  try {
    const { id_rol, nombre, nombre_usuario, correo, password } = req.body;

    if (!id_rol || !nombre || !correo || !password) {
      return res.status(400).json({
        message: "id_rol, nombre, correo y password son obligatorios"
      });
    }

    const existeCorreo = await Usuario.findOne({ where: { correo } });
    if (existeCorreo) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    // Crear usuario 
    const nuevoUsuario = await Usuario.create({
      id_rol,
      nombre,
      nombre_usuario,
      correo,
      password
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    await usuario.update(req.body);

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    await usuario.destroy();

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario
};
