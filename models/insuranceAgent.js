'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const insuranceAgent = sequelize.define(
        'insuranceAgent',
        {
            username: { 
                type: DataTypes.STRING, 
                unique: true 
            },
            password: DataTypes.STRING
        },
        {
            hooks: {
                beforeCreate: (insuranceAgent) => {
                    const salt = bcrypt.genSaltSync();
                    insuranceAgent.password = bcrypt.hashSync(insuranceAgent.password, salt);
                },
            }
        }
    );
    insuranceAgent.associate = function(models) {
        // associations can be defined here
        insuranceAgent.hasOne(models.Ticket);
    };

    insuranceAgent.prototype.validatePassword = function(password) {
        return bcrypt.compareSync(
            password,
            this.password
        );
    };

    return insuranceAgent;
};
