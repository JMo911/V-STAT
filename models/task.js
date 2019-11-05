'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    todo: DataTypes.STRING
  }, {});
  Task.associate = function (models) {
    // associations can be defined here
    Task.belongsTo(models.Ticket)
  }
  return Task;
};