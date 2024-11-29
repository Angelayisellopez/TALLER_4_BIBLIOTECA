const express = require('express');
const routes = express.Router();
const usuarioController = require('../controllers/usuarioController')

routes.get('/', usuarioController.traerUsuarios);
routes.get('/:id', usuarioController.obtenerUsuarioID);
routes.post('/:id', usuarioController.crearUsuario);
routes.put('/:id', usuarioController.actualizarUsuario);
routes.delete('/:id', usuarioController.eliminarUsuario);

module.exports=routes;