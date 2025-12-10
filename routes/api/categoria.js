const express = require('express');
const router = express.Router();

const {
  createCategoria,
  getAllCategorias,
  getCategoriaById,
  updateCategoria,
  deleteCategoria
} = require('../../Controllers/categoriaController');

router.delete('/:id', deleteCategoria);
router.get('/:id', getCategoriaById);
router.put('/:id', updateCategoria);
router.post('/', createCategoria);
router.get('/', getAllCategorias);

module.exports = router;
