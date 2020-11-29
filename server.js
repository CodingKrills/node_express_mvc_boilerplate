
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

// cors
app.use(cors())

// bp
app.use(express.json())

// routes 
app.use('/api/', require('./routes/productRoute'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})