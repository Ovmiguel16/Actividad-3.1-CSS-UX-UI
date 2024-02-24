const { Schema, model} = require('mongoose');


const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    apellido: {
        type: String,
        trim: true,
    },

    correo: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    genero: {
        type: String,
        trim: true,
        required: true
    }
    },  
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('Usuario', UsuarioSchema);