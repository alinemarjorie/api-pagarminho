'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    amount: DataTypes.INTEGER,
    describe: DataTypes.STRING,
    payment_method: DataTypes.STRING,
    card_number: DataTypes.STRING,
    card_name: DataTypes.STRING,
    card_validate: DataTypes.STRING,
    card_cvv: DataTypes.STRING
  }, {});
  Transactions.associate = function(models) {
    // associations can be defined here
  };
  Transactions.addHook('beforeCreate', transaction => {
    console.log(transaction.card_number)
    transaction.card_number = transaction.card_number.substr(-4)
  })
  return Transactions;
};