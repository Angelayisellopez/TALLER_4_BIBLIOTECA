const prestamoService=require('../services/prestamoServices')
class prestamoController {
    static async traerPrestamos(req, res) {
        try {
            let prestamos = await prestamoService.TraerPrestamos();
            res.json(prestamos);
        } catch(e) {
            console.log(e);
        }
    }

    static async obtenerPrestamoID(req, res) {
        try {
            let prestamo = await prestamoService.obtenerPrestamoID(req.params.id);
            res.json(prestamo);
        } catch(e) {
            res.json({e: 'Error al obtener préstamo'});
        }
    }

    static async crearPrestamo(req, res) {
        try {
            let nuevoPrestamo = await prestamoService.crearPrestamo(req.body);
            res.json(nuevoPrestamo);
        } catch(e) {
            res.json({e: 'Error al crear préstamo'});
        }
    }

    static async actualizarPrestamo(req, res) {
        try {
            let prestamoActualizado = await prestamoService.actualizarPrestamo(req.params.id, req.body);
            res.json(prestamoActualizado);
        } catch(e) {
            res.json({e: 'Error al actualizar préstamo'});
        }
    }

    static async eliminarPrestamo(req, res) {
        try {
            let prestamoEliminado = await prestamoService.eliminarPrestamo(req.params.id);
            res.json(prestamoEliminado);
        } catch(e) {
            res.json({e: 'Error al eliminar préstamo'});
        }
    }
}
module.exports=prestamoController;