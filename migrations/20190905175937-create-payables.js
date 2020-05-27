'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      payment_date: {
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.INTEGER
      },
      fee: {
        type: Sequelize.INTEGER
      },
      transactionId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payables');
  }
};
