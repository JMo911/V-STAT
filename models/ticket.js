'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    caseNumber: DataTypes.STRING,
    estimatedCost: DataTypes.INTEGER,
    vehicleMake: DataTypes.STRING,
    vehicleModel: DataTypes.STRING,
    vehicleYear: DataTypes.INTEGER,
    vehicleMileage: DataTypes.INTEGER
  });
  Ticket.associate = function (models) {
    // associations can be defined here
    // Ticket.belongsToMany(models.User, {
    //   through: {
    //     model: 'UserTicket',
    //     unique: false,
    //     timestamps: false
    //   },
    //   foreignKey: 'ticketId', 
    //   constraints: false
    // });
    Ticket.hasMany(models.Comment);
    Ticket.hasMany(models.Task);
  };

  return Ticket;
};