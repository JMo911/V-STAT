'use strict';
const models = require('../models');

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
    var fields = {
        username: 'JDoe',
        password: 'password',
        email: 'test@example.com',
        first_name: 'John',
        last_name: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    return models.User.create(fields);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete(
          'Users',
          null,
          {}
      );
  }
};
