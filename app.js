const express = require('express')
const bodyParser = require('body-parser')
const PORT = 5673
const models = require('./models');
const Transactions = models.Transactions;
const Payables = models.Payables
const app = express()

app.use(bodyParser.json())

app.listen(PORT)

app.post('/transactions', function (req, res) {
  Transactions.create(req.body)
    .then((transaction) => {
      let status
      let payment_date = new Date()
      let amount = transaction.amount

      if (transaction.payment_method == "debit_card") {
        status = "paid"
        payment_date = new Date()
        fee = amount * 0.03
      } else {
        status = "waiting_funds"
        payment_date = payment_date.setDate(payment_date.getDate() + 30)
        fee = amount * 0.05
      }

      return Payables.create({
        status,
        payment_date,
        amount,
        fee,
      })
        .then(transactions => res.send(transactions))
    })
    .catch(error => {
      console.log("Deu erro")
      console.log(error)
    })
})

app.get('/transactions', function (req, res) {
  return Transactions.findAll()
    .then(transactions => res.send(transactions))
})

app.get('/payables/available', function (req, res) {
  return Payables.findAll({
    where: {
      status: "paid"
    }
  })
    .then(payables => res.send(payables))
})

app.get('/payables/waiting_funds', function (req, res) {
  return Payables.findAll({
    where: {
      status: "waiting_funds"
    }
  })
    .then(payables => res.send(payables))
})