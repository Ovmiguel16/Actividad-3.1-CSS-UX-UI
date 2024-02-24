const UsuarioModel = require('../model/usuarioModel');

class Usuario {
    async registrarUsuario(req, res) { // POST
        const datosUsario = req.body;

        const checkExistingAccount = await UsuarioModel.findOne({correo: datosUsario.correo});
        if(checkExistingAccount) return res.json({error: true, mensaje: 'El correo ya se encuentra en uso, prueba uno diferente.'})

        const crearRegistro = new UsuarioModel(datosUsario);
        await crearRegistro.save(); // creando registro

        res.json({
            mensaje: 'Usuario registrado, ya estás participando en el sorteo!',
        })
    }
}

const usuarioControllers = new Usuario();


module.exports = {
    usuarioControllers
}
