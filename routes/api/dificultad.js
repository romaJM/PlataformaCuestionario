const express=require('express');
//creamos un objeto enrutador
const router =express.Router();
const {createDificultad,
  getAllDificultades,
  getDificultadById,
  updateDificultad,
  deleteDificultad}=require('../../Controllers/dificultadController');

  router.post('/', createDificultad);
router.get('/', getAllDificultades);
router.get('/:id', getDificultadById);
router.put('/:id', updateDificultad);
router.delete('/:id', deleteDificultad);


module.exports = router;

