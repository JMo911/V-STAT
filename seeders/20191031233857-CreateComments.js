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
   return queryInterface.bulkInsert('Comments', [
    {
      message: 'test user 1',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      UserId: 1
    },
    {
      message: 'test user 1 again',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      UserId: 1
    },
    {
      message: 'test user 2',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      UserId: 2
    },
    {
      message: 'test user 3',
      'createdAt': new Date(),
      'updatedAt': new Date(),
      UserId: 3
    }
], {});
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
