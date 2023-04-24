const express = require('express')
const router = express.Router()

let users = []

router.get('/', (requests, response) => {
    response.render('index', {style: 'style.css'})
})

router.get('/about', (request, response) => {
    response.render('about', {style: 'about.css'})
})

router.get('/register', (requests, response) => {
    response.render('register', {style: 'register.css' })
})

router.post('/user', (requests, response) => {
    if(requests.body){
        users.push(requests.body)
    }
    response.send(users)
})

module.exports = router