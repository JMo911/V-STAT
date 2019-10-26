'use strict';
module.exports = (sequelize, DataTypes) => {
  const insuranceAgent = sequelize.define('insuranceAgent', {
    companyName: DataTypes.STRING,
    employeeID: DataTypes.INTEGER
  }, {});
  insuranceAgent.associate = function(models) {
    // associations can be defined here
    insuranceAgent.hasMany(models.Ticket);
  };
  return insuranceAgent;
};


// Post.hasMany(Comment, {
//   foreignKey: 'commentableId',
//   constraints: false,
//   scope: {
//     commentable: 'post'
//   }
// });