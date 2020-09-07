const express = require('express');

const response = require('../../network/response')
const controller = require('./controller');

const router = express.Router();

router.post('/login', (req, res) => {
    controller.loginUser(req.body).then(data => {
        response.success(req, res, data, 200)
    }).catch(err => {
        console.log(err);
        response.error(req, res, err.message, err.status || 500)
    })
})

router.post('/', (req, res) => {
    controller.createUser(req.body).then(data => {
        response.success(req, res, data, 200)
    }).catch(err => {
        response.error(req, res, err.message, err.status || 500)
    })
})

module.exports = router