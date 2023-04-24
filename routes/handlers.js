const express = require('express')
const router = express.Router()

router.get('/', (requests, response) => {
    response.render('index', {style: 'style.css'})
})

router.get('/about', (request, response) => {
    response.render('about', {style: 'about.css'})
})

module.exports = router