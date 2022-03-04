const path = require('path')
const express = require('express')
const morgan = require('morgan')
var expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//http logger
app.use(morgan('combined'))

//template engine
app.use(expressLayouts);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'resource/views'))

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req,res) =>{
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})