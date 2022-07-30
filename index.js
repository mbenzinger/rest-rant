//modules and globals
require('dotenv').config()
const express = require('express')
const app = express()

//express settings
//next line was not in the prior work but magically appeared in part 4 without direction
//app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


//controllers and routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})
 
  //all pages go above the 404

app.get('*', (req, res) => {
  res.render('error404')
})

//listen for connections
app.listen(process.env.PORT)
