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
    return queryInterface.bulkInsert('Tickets', [
      {
        caseNumber: 'casenum1',
        estimatedCost: 1,
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
        vehicleMake: "toyota3",
        vehicleModel: "camry3",
        vehicleYear: 1990,
        vehicleMileage: 1990,
        'createdAt': new Date(),
        'updatedAt': new Date(),
      }
    ], {});

    // return queryInterface.bulkInsert('UserTicket', [
    //   {
    //     'UserId': 1,
    //     'TicketId': 1,
    //     'createdAt': new Date(),
    //     'updatedAt': new Date(),
    //   },
    //   {
    //     'UserId': 2,
    //     'TicketId': 1,
    //     'createdAt': new Date(),
    //     'updatedAt': new Date(),
    //   },
    //   {
    //     'UserId': 3,
    //     'TicketId': 2,
    //     'createdAt': new Date(),
    //     'updatedAt': new Date(),
    //   },
    //   {
    //     'UserId': 2,
    //     'TicketId': 3,
    //     'createdAt': new Date(),
    //     'updatedAt': new Date(),
    //   }
    // ])
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
