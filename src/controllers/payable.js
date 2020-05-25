const models = require('../models');
const Payables = models.Payables

const listAvailableFunds = (req, res) => {
  return Payables.findAll({
    where: {
      status: "paid"
    }
  })
    .then(payables => res.send(payables))
}

const listWaitingFunds = (req, res) => {
  return Payables.findAll({
    where: {
      status: "waiting_funds"
    }
  })
    .then(payables => res.send(payables))
}

module.exports = {
  listAvailableFunds,
  listWaitingFunds
}
