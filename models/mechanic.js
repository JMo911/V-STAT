'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Mechanic = sequelize.define(
        'Mechanic',
        {
            username: { 
                type: DataTypes.STRING, 
                unique: true 
            },
            password: DataTypes.STRING
        },
        {
            hooks: {
                beforeCreate: (mechanic) => {
                    const salt = bcrypt.genSaltSync();
                    mechanic.password = bcrypt.hashSync(mechanic.password, salt);
                },
            }
        }
    );
    Mechanic.associate = function(models) {
        // associations can be defined here
        Mechanic.hasOne(models.Ticket);
    };

    Mechanic.prototype.validatePassword = function(password) {
        return bcrypt.compareSync(
            password,
            this.password
        );
    };

    return Mechanic;
};
