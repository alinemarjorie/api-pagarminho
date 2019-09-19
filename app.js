const express = require('express')
const bodyParser = require('body-parser')
const PORT = 5673
const models = require('./models');
const Transactions = models.Transactions;
const Payables = models.Payables
const app = express()

app.use(bodyParser.json())

app.listen(PORT)

app.post('/transactions', function (req,res) {
  Transactions.create(req.body)
    .then((transaction) => {
      let status
      let payment_date = new Date()
      console.log(payment_date)
      
      if(transaction.card_name == "debit_card"){
        status= "paid"
        payment_date = new Date()
      }else{
        status = "waiting_funds"
        payment_date = payment_date.setDate(payment_date.getDate()+30)
      }
      
      return Payables.create({
        status,
        payment_date,
      })
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