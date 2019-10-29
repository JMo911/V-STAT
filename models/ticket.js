'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    caseNumber: DataTypes.STRING,
    estimatedCost: DataTypes.INTEGER,
    approvalDate: DataTypes.DATEONLY,
    estimatedCompletionDate: DataTypes.DATEONLY,
    vehicleMake: DataTypes.STRING,
    vehicleModel: DataTypes.STRING,
    vehicleYear: DataTypes.INTEGER,
    vehicleMileage: DataTypes.INTEGER
  });
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsTo(models.User);
  };

  return Ticket;
};