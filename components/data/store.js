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

module.exports = {
    crateDate,
    getData
}