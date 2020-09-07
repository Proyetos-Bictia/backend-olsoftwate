const store = require('./store');

async function createUser(user) {
    if (!user.email || !user.name || !user.password) {
        return Promise.reject({ status: 401, message: 'hacen falta parametros' })
    }
    return store.createUser(user)
}


async function loginUser(user) {
    if (!user.email || !user.password) {
        return Promise.reject({ status: 401, message: 'hacen falta parametros' })
    }
    const usuario = await store.getUser(user.email)
    if(!usuario) {
        return Promise.reject({ status: 404, message: 'Usuario no encontrado' })
    }
    if(usuario.password === user.password) {
        return usuario
    } else {
        return Promise.reject({ status: 401, message: 'Contraseña invalida' })
    }
}

module.exports = {
    loginUser,
    createUser,
}