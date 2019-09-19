'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      describe: {
        type: Sequelize.STRING
      },
      payment_method: {
        type: Sequelize.STRING
      },
      card_number: {
        type: Sequelize.STRING
      },
      card_name: {
        type: Sequelize.STRING
      },
      card_validate: {
        type: Sequelize.STRING
      },
      card_cvv: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Transactions');
  }
};