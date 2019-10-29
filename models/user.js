'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define(
        'User',
        {
            username: { 
                type: DataTypes.STRING, 
                unique: true 
            },
            password: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING
        },
        {
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                },
            }
        }
    );
    User.associate = function(models) {
        // associations can be defined here
        User.hasOne(models.Ticket);
        User.belongsTo(models.UserType);
    };

    User.prototype.validatePassword = function(password) {
        return bcrypt.compareSync(
            password,
            this.password
        );
    };

    return User;
};

