let express = require('express');
let routes = express.Router();
let payable = require('../controllers/payable');

routes.get('/available_funds', payable.listAvailableFunds);
routes.get('/waiting_funds', payable.listWaitingFunds);

module.exports = routes;
