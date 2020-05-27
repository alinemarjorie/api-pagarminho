const models = require('../models');
const registerPayable = require('../services/payable')
const Transactions = models.Transactions;

const createTransaction = async (req, res) => {
  let transaction

  try {
    transaction = await Transactions.create(req.body)
  } catch (err) {
    console.log({
      err,
      message: 'deu ruim transaction'
    })
    throw err
  }

  await registerPayable(transaction)

  res.send(transaction)
}

const listAllTransactions = async (req, res) => {
  try {
 const transaction = await Transactions.findAll()

  res.send(transaction)
} catch (err) {
  console.log({
    err,
    message: 'deu ruim get transaction'
  })
  throw err
}
}

module.exports = {
  createTransaction,
  listAllTransactions
}
