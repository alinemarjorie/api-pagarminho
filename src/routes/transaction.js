let express = require('express');
let routes = express.Router();
let transaction = require('../controllers/transaction');

routes.post('/', transaction.createTransaction);
routes.get('/', transaction.listAllTransactions);

module.exports = routes;
