const prestamo = require('../models/prestamoModels')

class prestamoService {
    static async TraerPrestamos() {
        try {
            let prestamos = await prestamo.findAll();
            return prestamos;
        } catch(e) {
            console.log("Error ", e);
        }
    }
    static async obtenerPrestamoId(id) {
        try {
            let Prestamo = await Prestamo.findByPK(id);
            if(!Prestamo) {
                console.log("Préstamo no encontrado");
            } else {
                return Prestamo;
            }
        } catch(e) {
            console.log("Error al obtener el préstamo ", e);
        }
    }

    static async crearPrestamo(datos) {
        try {
            let nuevoPrestamo = await prestamo.create(datos);
            return nuevoPrestamo;
        } catch(e) {
            console.log("Error al crear préstamo", e);
        }
    }

    static async actualizarPrestamo(id, datos) {
        try {
            let prestamoAct = await prestamo.update(
                datos, 
                { where: { id: id } }
            );
            if (prestamoAct === 0) {
                return `No se ha podido actualizar el préstamo`;
            } else {
                return `Préstamo actualizado correctamente`;
            }
        } catch(e) {
            return ({ error: `Error ${e}` });
        }
    }
    static async eliminarPrestamo(id) {
        try {
            let borrar = await prestamo.destroy({ where: { id } });
            if (borrar === 0) {
                return `No se ha podido eliminar el préstamo`;
            } else {
                return `Préstamo eliminado correctamente`;
            }
        } catch(e) {
            return ({ error: `Error ${e}` });
        }
    }
}
module.exports=prestamoService;