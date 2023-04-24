const express = require('express')
const router = express.Router()

router.get('/', (requests, response) => {
    response.render('index')
})

router.get('/about', (request, response) => {
    response.render('about')
})

module.exports = router