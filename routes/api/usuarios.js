const express = require('express');
const router = express.Router();
const {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
} = require('../../Controllers/usuarioController');

const verificarRole = require('../../middleware/verificarRole');

 
router.post('/', verificarRole(["admin"]), createUsuario);
router.get('/',verificarRole(["admin"]), getAllUsuarios);
//router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;
