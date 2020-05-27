const models = require('../models');
const Payables = models.Payables

const listAvailableFunds = async (req, res) => {
try {
  const payable = await Payables.findAll({
    where: {
      status: "paid"
    }
  })

  res.send(payable)
} catch (err) {
  console.log({
    err,
    message: 'deu ruim get payable'
  })
  throw err
}
}

const listWaitingFunds = async (req, res) => {
try {
  const payable = await Payables.findAll({
    where: {
      status: "waiting_funds"
    }
  })

  res.send(payable)
} catch (err) {
  console.log({
    err,
    message: 'deu ruim get payable'
  })
  throw err
}
}

module.exports = {
  listAvailableFunds,
  listWaitingFunds
}
