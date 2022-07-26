require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

 
  //all pages go above the 404

app.get('*', (req, res) => {
  res.render('errors404')
})

app.listen(process.env.PORT)
