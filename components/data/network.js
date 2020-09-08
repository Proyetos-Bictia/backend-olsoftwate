const express = require('express');

const response = require('../../network/response')
const controller = require('./controller');

const router = express.Router();

router.post('/', (req, res) => {
    controller.createData(req.body).then(data => {
        response.success(req, res, data, 201)
    }).catch(err => {
        response.error(req, res, err.message || 'error', err.status || 500)
    })
})

router.get('/', (req, res) => {
    controller.getData().then(data => {
        response.success(req, res, data, 200)
    }).catch(err => {
        response.error(req, res, err.message || 'error', err.status || 500)
    })
})

module.exports = router
