let { DataTypes } = require('sequelize'); 
let sequelize = require('../config/db'); 

const Libro = sequelize.define('libro',{
    titulo: {
        type: DataTypes.STRING,  
        allowNull: false         
    },
   autor: {
        type: DataTypes.STRING,  
        allowNull: false        
    },
    genero: {
        type: DataTypes.STRING,  
        allowNull: false 
        }
}, {
    timestamps: false, 
    tableName: 'Libro',        
});

module.exports=Libro;
