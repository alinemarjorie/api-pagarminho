const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000
const transactionRoutes = require('./src/routes/transaction')
const payableRoutes = require('./src/routes/payable')

app.use(bodyParser.json())

app.use('/transaction', transactionRoutes);
app.use('/payable', payableRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}...`)
});
