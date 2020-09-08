const store = require('./store')

async function createData(data) {
    console.log(data);
    if (!data.name || !data.lastName || !data.document || !data.rol || !data.password || !data.phone || !data.email) {
        return Promise.reject({ message: 'Faltan parametros', status: 401 })
    }
    return store.crateDate(data)
}

async function getData() {
    return store.getData()
}

async function editUser(id, data) {
    return store.editUser(id, data)
}

module.exports = {
    createData,
    getData,
    editUser,
}