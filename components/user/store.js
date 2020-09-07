const User = require('./model')

function createUser(user) {
    const myUser = new User(user);
    return myUser.save()
}

function getUser(email) {
    return new Promise((resolve, reject) => {
        User.findOne({ email }).exec((err, data) => {
            if (err) {
                reject({ status: 500, message: 'Ocurrio un errro en la busqueda' })
            }
            resolve(data)
        })
    })
}

module.exports = {
    getUser,
    createUser
}