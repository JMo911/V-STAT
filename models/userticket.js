'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTicket = sequelize.define('UserTicket', {});
  UserTicket.associate = function(models) {
    // associations can be defined here
    UserTicket.belongsTo(models.User);
    UserTicket.belongsTo(models.Ticket)
  };
  return UserTicket;
};