const libro = require('../models/libroModels')
class libroService {
    static async TraerLibros() {
        try {
            let libros = await libro.findAll();
            return libros;
        } catch(e) {
            console.log("Error ", e);
        }
    }

    static async obtenerLibroId(id) {
        try {
            let Libro = await libro.findByPK(id);
            if(!Libro) {
                console.log("Libro no encontrado");
            } else {
                return Libro;
            }
        } catch(e) {
            console.log("Error al obtener el libro ", e);
        }
    }

    static async crearLibro(datos) {
        try {
            let nuevoLibro = await libro.create(datos);
            return nuevoLibro;
        } catch(e) {
            console.log("Error al crear libro", e);
        }
    }

    static async actualizarLibro(id, datos) {
        try {
            let libroAct = await libro.update(
                datos, 
                { where: { id: id } }
            );
            if (libroAct === 0) {
                return `No se ha podido actualizar el libro`;
            } else {
                return `Libro actualizado correctamente`;
            }
        } catch(e) {
            return ({ error: `Error ${e}` });
        }
    }

    static async eliminarLibro(id) {
        try {
            let borrar = await libro.destroy({ where: { id } });
            if (borrar === 0) {
                return `No se ha podido eliminar el libro`;
            } else {
                return `Libro eliminado correctamente`;
            }
        } catch(e) {
            return ({ error: `Error ${e}` });
        }
    }
}
module.exports = libroService
