const express = require('express');
const routes = express.Router();
const prestamoController = require('../controllers/prestamoController')

routes.get('/', prestamoController.traerPrestamos);
routes.get('/:id', prestamoController.obtenerPrestamoID);
routes.post('/:id', prestamoController.crearPrestamo);
routes.put('/:id', prestamoController.actualizarPrestamo);
routes.delete('/:id', prestamoController.eliminarPrestamo);

module.exports=routes;