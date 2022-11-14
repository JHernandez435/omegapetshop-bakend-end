const EspecieOperaciones = require("../operaciones/EspecieOperaciones");
const router = require('express').Router();

router.get("/", EspecieOperaciones.getEspecies);
router.get("/:id", EspecieOperaciones.getEspecie);
router.post("/", EspecieOperaciones.guardarEspecie);
router.put("/:id", EspecieOperaciones.modificarEspecie);
router.delete("/:id", EspecieOperaciones.borrarEspecie);

module.exports = router
