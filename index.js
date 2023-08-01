const express = require('express')
const app = express()
require('dotenv').config()

const CategoryRouter = require('./API/Category/Router')
const BrandRouter = require('./API/Brands/Router')
const UserRouter = require('./API/User/Router')
const productRouter = require('./API/Products/Router')

const port = process.env.SERVER_PORT || 3200

app.use(express.json())
app.use ('/api' , CategoryRouter)
app.use ('/api' , BrandRouter)
app.use ('/api' , UserRouter)
app.use ( '/api', productRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})