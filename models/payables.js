'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payables = sequelize.define('Payables', {
    status: DataTypes.STRING,
    payment_date: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    fee: DataTypes.INTEGER,
  }, {});
  Payables.associate = function(models) {
    // associations can be defined here
  };

  return Payables;
};