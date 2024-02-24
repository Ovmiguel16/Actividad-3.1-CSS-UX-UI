const express = require("express");
const router = express.Router();
const { usuarioControllers } = require("../controller/usuario.controllers");


//Ruta con el metodo POST
router.post('/registrar-usuario', usuarioControllers.registrarUsuario);



module.exports = router;