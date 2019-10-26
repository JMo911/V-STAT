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
        lastName: "JDoe",
        caseNumber: "1234"
        // createdAt: new Date(),
        // updatedAt: new Date()
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
