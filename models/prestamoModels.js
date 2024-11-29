let { DataTypes } = require('sequelize'); 
let sequelize = require('../config/db'); 

const Prestamo = sequelize.define('Prestamo', {
    fechaPrestamo: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    fechaDevolucionPrevista: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('activo', 'devuelto', 'vencido'),
        defaultValue: 'activo'
    },
    timestamps: false, 
    tableName: 'Prestamos',  
});
module.exports=Prestamo;