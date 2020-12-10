
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

// cors
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// routes 
app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})