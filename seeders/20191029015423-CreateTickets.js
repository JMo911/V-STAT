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
    queryInterface.bulkInsert('Tickets', [
      {
        caseNumber: 'casenum1',
        estimatedCost: 1,
        vehicleMake: "Audi",
        vehicleModel: "A4",
        vehicleYear: 2017,
        vehicleMileage: 27000,
        'createdAt': new Date(),
        'updatedAt': new Date(),
      },
      {
        caseNumber: 'casenum2',
        estimatedCost: 2,
        vehicleMake: "Honda",
        vehicleModel: "Fit",
        vehicleYear: 2015,
        vehicleMileage: 15000,
        'createdAt': new Date(),
        'updatedAt': new Date(),
      },
      {
        caseNumber: 'casenum3',
        estimatedCost: 3,
        vehicleMake: "Honda",
        vehicleModel: "Accord",
        vehicleYear: 1997,
        vehicleMileage: 180000,
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
