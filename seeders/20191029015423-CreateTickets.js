'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  //    caseNumber: DataTypes.STRING,
  //   estimatedCost: DataTypes.INTEGER,
  //   approvalDate: DataTypes.DATEONLY,
    // estimatedCompletionDate: DataTypes.DATEONLY,
  //   vehicleMake: DataTypes.STRING,
  //   vehicleModel: DataTypes.STRING,
  //   vehicleYear: DataTypes.INTEGER,
  //   vehicleMileage: DataTypes.INTEGER
   queryInterface.bulkInsert('Tickets', [
    {
      caseNumber: 'casenum1',
      estimatedCost: 1,
      // approvalDate: '1990-01-01',
      // estimatedCompletionDate: '1990-01-01',
      vehicleMake: "toyota1",
      vehicleModel: "camry1",
      vehicleYear: 1990,
      vehicleMileage: 1990,
      'createdAt': new Date(),
      'updatedAt': new Date(),
    },
    {
      caseNumber: 'casenum2',
      estimatedCost: 2,
      // approvalDate: '1990-02-02',
      // estimatedCompletionDate: '1990-02-02',
      vehicleMake: "toyota2",
      vehicleModel: "camry2",
      vehicleYear: 1990,
      vehicleMileage: 1990,
      'createdAt': new Date(),
      'updatedAt': new Date(),
    },
    {
      caseNumber: 'casenum3',
      estimatedCost: 3,
      // approvalDate: '1990-03-03',
      // estimatedCompletionDate: '1990-03-03',
      vehicleMake: "toyota3",
      vehicleModel: "camry3",
      vehicleYear: 1990,
      vehicleMileage: 1990,
      'createdAt': new Date(),
      'updatedAt': new Date(),
    }
  ], {});

  return queryInterface.bulkInsert('UserTicket', [
    {
      'UserId': 1,
      'TicketId': 1,
      'createdAt': new Date(),
      'updatedAt': new Date(),
    },
    {
      'UserId': 2,
      'TicketId': 1,
      'createdAt': new Date(),
      'updatedAt': new Date(),
    },
    {
      'UserId': 3,
      'TicketId': 2,
      'createdAt': new Date(),
      'updatedAt': new Date(),
    },
    {
      'UserId': 2,
      'TicketId': 3,
      'createdAt': new Date(),
      'updatedAt': new Date(),
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
