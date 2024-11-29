const express = require('express');
const routes = express.Router();
const libroController = require('../controllers/libroController')

routes.get('/', libroController.TraerLibros);
routes.get('/:id', libroController.obtenerLibroId);
routes.post('/:id', libroController.crearLibro);
routes.put(':id', libroController.actualizarLibro);
routes.delete('/:id', libroController.eliminarLibro);

module.exports=routes;