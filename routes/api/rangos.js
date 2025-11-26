const express=require('express');
//creamos un objeto enrutador
const router =express.Router();
const {createRangoEdad,
 getAllRangosEdad,
  getRangoEdadById ,
  updateRangoEdad,
  deleteRangoEdad}=require('../../Controllers/rangoEdadController.js');

  router.post('/', createRangoEdad);
router.get('/', getAllRangosEdad);
router.get('/:id', getRangoEdadById );
router.put('/:id', updateRangoEdad);
router.delete('/:id', deleteRangoEdad);


module.exports = router;