import LocalStrategy from 'passport-local';
import models from '../models';

const localStrategy = new LocalStrategy(
    {
        usernameField: 'lastName',
        passwordField: 'caseNumber'
    },
    function(lastName, caseNumber, cb) {
        models.User.findOne({
            where: {
                lastName: lastName
            }
        }).then(
            function(user) {
                if (!user || !user.validateCaseNumber(caseNumber)) {
                    return cb(null, false, {message: 'Incorrect last name or case number.'});
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