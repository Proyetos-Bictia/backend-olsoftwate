const user = require('../components/user/network')
const data = require('../components/data/network')

const routes = function (server) {
    server.use('/user', user),
    server.use('/data', data)
}

module.exports = routes

