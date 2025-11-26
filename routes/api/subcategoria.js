const express = require('express');
const router = express.Router();
const subcategoriaController = require('../../Controllers/subcategoriaController');

router.get('/', subcategoriaController.getAllSubcategorias);
router.get('/:id', subcategoriaController.getSubcategoriaById);
router.post('/', subcategoriaController.createSubcategoria);
router.put('/:id', subcategoriaController.updateSubcategoria);
router.delete('/:id', subcategoriaController.deleteSubcategoria);

module.exports = router;
