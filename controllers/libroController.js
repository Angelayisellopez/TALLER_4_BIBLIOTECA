
const libroservice = require('../services/libroService');

class libroController{

    static async TraerLibros(req, res){
        try{
        let traer = await libroservice.TraerLibros()
        res.json(traer);
        }catch(e){
            res,json({e:'no se puedo traer'})
        }
    }

    static async obtenerLibroId(req, res){
        try{
            let obtener = await libroservice.obtenerLibroId(req.params.id)
            res.json(obtener)
        }catch(e){
            res.json({e:'error al obtener '})
        }
    }
    static async crearLibro(req, res){
        try{
            let crear = await libroservice.crearLibro(req.body)
            res.json(crear)
        }catch(e){
            res.json({e:'error al crear'})
        }
    }
    static async actualizarLibro(req, res){
        try{
            let atua = await libroservice.actualizarLibro(req.params.id, req.body)
            res.json(atua)
        }catch(e){
            res.json({e:'error al atualizar'})
        }
    }
    static async eliminarLibro(req, res){
        try{
            let elimina = await libroservice.eliminarLibro(req.params.id)
            res.json(elimina)
        }catch(e){
            res.json({e:'error al eliminar'})
        }
    }
}
module.exports=libroController;