const express = require('express')
const bodyParser = require('body-parser')
const PORT = 4000
const models = require('./models');
const Transactions = models.Transactions;

const app = express()

app.use(bodyParser.json())

app.post('/', function (req, res) {
  res.send(req.body)
})

app.listen(PORT)

app.post('/transactions', function (req, res) {
  return Transactions.create(req.body)
  .then(transaction => {
    return res.status(201).send(transaction)
  })
  .catch(error => {
    console.log("Deu erro")
    console.log(error)
  })
})

app.get('/transactions', function (res, res) {
  return Transactions.findAll()
  .then(transactions => res.send(transactions))
})