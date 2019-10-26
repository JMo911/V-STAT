'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define(
        'User',
        {
            lastName: DataTypes.STRING,
            caseNumber: DataTypes.STRING
        },
        {
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.caseNumber = bcrypt.hashSync(user.caseNumber, salt);
                },
            }
        }
    );
    User.associate = function(models) {
        // associations can be defined here
        User.hasOne(models.Ticket);
    };

    User.prototype.validateCaseNumber = function(caseNumber) {
        return bcrypt.compareSync(
            caseNumber,
            this.caseNumber
        );
    };

    return User;
};
