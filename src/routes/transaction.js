const express = require('express');
const routes = express.Router();
const transaction = require('../controllers/transaction');
const validationMiddleware = require ('../validator/validation')
const { transactionValidate } = require('../validator/schemas/transaction')

routes.post('/', validationMiddleware(transactionValidate), transaction.createTransaction);
routes.get('/', transaction.listAllTransactions);

module.exports = routes;
