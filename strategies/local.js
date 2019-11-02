import LocalStrategy from 'passport-local';
import models from '../models';

const localStrategy = new LocalStrategy(
    {
        username: 'username',
        password: 'password'
    },
    function(username, password, cb) {
        models.User.findOne({
            where: {
                username: username
            }
        }).then(
            function(user) {
                if (!user || !user.validatePassword(password)) {
                    return cb(null, false, {message: 'Incorrect username or password.'});
                }
                return cb(null, user, {message: 'Logged In Successfully'});
            }
        ).catch(function(error) {
            cb(error)
            throw error;
        });
    }
);

export default localStrategy;