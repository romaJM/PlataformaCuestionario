// Controllers/authController.js
const Rol = require('../Models/rol');
const Usuario = require('../Models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    // 1. Buscar usuario
    const usuario = await Usuario.findOne({
      where: { correo },
      include: { model: Rol }
    });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // 2. Validar password
    const validPass = await bcrypt.compare(password, usuario.password);
    if (!validPass) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // 3. Crear JWT
    const token = jwt.sign(
      {
        id_usuario: usuario.id_usuario,
        rol: usuario.Rol.rol
      },
      process.env.JWT_SECRET,
      { expiresIn: '8h' } // expira en 8 horas (puedes cambiar)
    );

    res.json({
      message: "Acceso correcto",
      token,
      usuario: {
        id: usuario.id_usuario,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.Rol.rol
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login };
