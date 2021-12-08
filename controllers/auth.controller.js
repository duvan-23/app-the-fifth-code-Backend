const Usuario = require('../model/usuariosModel');
const jwt = require('jsonwebtoken');
let aes256 = require('aes256');
const key = 'CLAVEDIFICIL';
/*
    401 -> no autorizado
    404 -> not found
    400 -> Enviaste algo que no era o bad request
    500 -> Exploto el servidor
    200 -> Ok
*/

const singIn = async (request, response) => {
    try{
        const usuario = await Usuario.findOne({email: request.body?.email})
        if(!usuario){
            return response.status(401).json({response: "Credenciales invalidas"})
        }
        
        const claveDesencriptada = aes256.decrypt(key, usuario.password)
        if(request.body?.password != claveDesencriptada){
            return response.status(401).json({response: "Credenciales invalidas"})
        }

        const token = jwt.sign({
            role: usuario.role
        }, key, {expiresIn: 60 * 60 * 2})

        response.status(200).json({jwt: token})
    }catch(error){
        console.log(error)
        response.status(500).json({response:"Contacte al admin"})
    }

}

module.exports = singIn;