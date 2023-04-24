const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const routes = require('./routes/handlers')
const path = require('path')


app.engine('handlebars', handlebars.engine({ 
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use('/', routes)

app.listen(8080, () => {
    console.log("Listen in port 8080")
})