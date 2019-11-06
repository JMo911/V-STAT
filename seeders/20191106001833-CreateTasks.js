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
   return queryInterface.bulkInsert('Tasks', [
     {
      todo: 'ticket1todo1',
      completed: false,
      'createdAt': new Date(),
      'updatedAt': new Date(),
      TicketId: 1
    },
    {
      todo: 'ticket1todo2',
      completed: false,
      'createdAt': new Date(),
      'updatedAt': new Date(),
      TicketId: 1
    },
      {
        todo: 'ticket2todo1',
        completed: false,
        'createdAt': new Date(),
        'updatedAt': new Date(),
        TicketId: 2
    },
    {
      todo: 'ticket2todo2',
      completed: false,
      'createdAt': new Date(),
      'updatedAt': new Date(),
      TicketId: 2
    },
    {
      todo: 'ticket3todo1',
      completed: false,
      'createdAt': new Date(),
      'updatedAt': new Date(),
      TicketId: 3
    },
    {
      todo: 'ticket3todo2',
      completed: false,
      'createdAt': new Date(),
      'updatedAt': new Date(),
      TicketId: 3
    },
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
