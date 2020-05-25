const models = require('../models');
const Transactions = models.Transactions;
const Payables = models.Payables

const createTransaction = (req, res) => {
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
}

const listAllTransactions = (req, res) => {
  return Transactions.findAll()
    .then(transactions => res.send(transactions))
}

module.exports = {
  createTransaction,
  listAllTransactions
}
