const Data = require('./model');

function crateDate(data) {
    const myData = new Data(data);
    return myData.save()
}

function getData() {
    return new Promise((resolve, reject) => {
        Data.find().exec((err, data) => {
            if (err) {
                reject({ status: 500, message: 'Ocurrio un errro en la busqueda' })
            }
            resolve(data)
        })
    })
}

function editUser(id, data) {
    return new Promise((resolve, reject) => {
        Data.findByIdAndUpdate(id, data, { new: true }).exec((err, data) => {
            if (err) {
                reject({ status: 500, message: 'Ocurrio un errro Actualizando el usuario' })
            }
            resolve(data)
        })
    })
}

function delteUser(id) {
    return new Promise((resolve, reject) => {
        Data.findByIdAndDelete(id).exec((err, data) => {
            if (err) {
                reject({ status: 500, message: 'Ocurrio un errro Actualizando el usuario' })
            }
            resolve(id)
        })
    })
}

module.exports = {
    crateDate,
    getData,
    editUser,
    delteUser,
}