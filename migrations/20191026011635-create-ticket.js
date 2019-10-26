'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      caseNumber: {
        type: Sequelize.STRING
      },
      estimatedCost: {
        type: Sequelize.INTEGER
      },
      approvalDate: {
        type: Sequelize.DATE
      },
      estimatedCompletionDate: {
        type: Sequelize.DATE
      },
      vehicleMake: {
        type: Sequelize.STRING
      },
      vehicleModel: {
        type: Sequelize.STRING
      },
      vehicleYear: {
        type: Sequelize.DATE
      },
      vehicleMileage: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Tickets');
  }
};