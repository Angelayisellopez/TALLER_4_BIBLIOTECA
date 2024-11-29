const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
dotenv.config();
const app = express();
const port = process.env.PORT;  
app.use(express.json()); 
const libroroutes=require('./routes/libroRoutes') 
const prestamoroutes=require('./routes/prestamoRoutes')
const usuarioroutes=require('./routes/usuarioRoutes')


app.use('/api/libros',libroroutes ); 
app.use('/api/prestamo', prestamoroutes ) ;
app.use('/api/usuario', usuarioroutes ) ;


let startDB = async () => {
    try {
        await sequelize.sync()
        console.log("base de deatos sincronizada");
        
        app.listen(port, () => {
            
            console.log(`El servidor está corriendo en el puerto ${port}`);
        });
    } catch (e) {
        console.log("error en la base de datos ", e);
        
    }
}
startDB()
   