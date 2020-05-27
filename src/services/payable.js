const models = require('../models');
const Payables = models.Payables

const registerPayable = async (transaction) => {
  let amount = transaction.amount
  let transactionId = transaction.id
  let status = "waiting_funds"
  let payment_date = new Date().setDate(new Date().getDate() + 30)
  let fee = amount * 0.05

  if (transaction.payment_method == "debit_card") {
    status = "paid"
    payment_date = new Date()
    fee = amount * 0.03
  }
  try {
    await Payables.create({
    transactionId,
    status,
    payment_date,
    amount,
    fee,
    })
  } catch (err) {
    console.log({
      err,
      message: 'deu ruim payable'
    })
  }
}

module.exports = registerPayable
