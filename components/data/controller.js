const store = require('./store')

async function createData(data) {
    if (!data.name || !data.lastName || !data.document || !data.rol || !data.state || !data.password || !data.phone || !data.email) {
        return Promise.reject({ message: 'Faltan parametros', status: 401 })
    }
    return store.crateDate(data)
}

async function getData() {
    return store.getData()
}

module.exports = {
    createData,
    getData,
}