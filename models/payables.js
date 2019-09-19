'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payables = sequelize.define('Payables', {
    status: DataTypes.STRING,
    payment_date: DataTypes.DATE
  }, {});
  Payables.associate = function(models) {
    // associations can be defined here
  };

  return Payables;
};