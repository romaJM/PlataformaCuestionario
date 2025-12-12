
const Rol = require('../Models/rol');
const Usuario = require('../Models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    // busca usuario
    const usuario = await Usuario.findOne({
      where: { correo },
      include: { model: Rol }
    });

    if (!usuario) {
      return res.status(404).json({ message: 'error al autenticarse' }); 
    }

    const validPass = await bcrypt.compare(password, usuario.password);
    if (!validPass) {
      return res.status(401).json({ message: 'error al autenticarse' });
    }

    const token = jwt.sign(
      {
        id_usuario: usuario.id_usuario,
        rol: usuario.Rol.rol
      },
      process.env.JWT_SECRET,
      { expiresIn: '8h' } //en teoria expira en 8 horas
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
