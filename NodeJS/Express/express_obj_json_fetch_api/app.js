const express = require('express')
const { randomUUID } = require('crypto')
const { response } = require('express')
const cors = require('cors')

const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')


const allowedOrigins = ['http://localhost:3001', 'http://example.com'];
const port = 3001


const app = express()
app.use(express.json())
app.use(cors({
  origin: allowedOrigins, // Allow requests only from this origin
  //methods: ['GET', 'POST'],      // Allow only specified methods
  allowedHeaders: ['Content-Type'], // Allow only specified headers
}));





app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))

let products = []
//render html
fs.readFile('products.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    products = JSON.parse(data)
  }
})

app.post('/products', (req, res) => {
  const { name, price } = req.body

  const product = {
    name,
    price,
    id: randomUUID(),
  }

  products.push(product)

  productFile()

  return res.json(product)
})

app.get('/products',  (req, res) => {
  return res.json(products)
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  const product = products.find((product) => product.id === id)
  return res.json(product)
})

app.get('/', (req, res) => {
  //res.send("home page!");
  res.render('home')
})

app.put('/products/:id', (req, res) => {
  const { id } = req.params
  const { name, price } = req.body

  const productIndex = products.findIndex((product) => product.id === id)

  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  }

  productFile()

  return res.json({ message: 'Produto alterado com sucecsso' })
})

app.delete('/products/:id', (req, res) => {
  const { id } = req.params

  const productIndex = products.findIndex((product) => product.id === id)

  products.splice(productIndex, 1)

  productFile()

  return res.json({ message: 'produto removido com sucesso!' })
})

function productFile() {
  fs.writeFile('products.json', JSON.stringify(products), (err) => {
    if (err) {
      console.log(erro)
    } else {
      console.log('produto inserido')
    }
  })
}

app.listen(port, () => console.log('server rodando na porta: ' + port))
