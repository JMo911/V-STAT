'use strict';
var bcrypt = require('bcrypt');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

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
   return queryInterface.bulkInsert('Users', [
    {
      username: 'John Doe',
      password: hashPassword("testpass"),
      firstName: "testfirst",
      lastName: "testlast",
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'UserTypeId': 1
    },
    {
      username: 'Jane Doe',
      password: hashPassword("2testpass"),
      firstName: "2testfirst",
      lastName: "2testlast",
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'UserTypeId': 2
    },
    {
      username: 'Jill Doe',
      password: hashPassword("3testpass"),
      firstName: "3testfirst",
      lastName: "3testlast",
      'createdAt': new Date(),
      'updatedAt': new Date(),
      'UserTypeId': 3
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
