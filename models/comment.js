'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    message: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User)
    Comment.belongsTo(models.Ticket)
  };
  return Comment;
};