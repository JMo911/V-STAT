const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

export default new JWTStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        'secretOrKey': 'your_jwt_secret'
    }, (jwtPayload, done) => {
        try {
            return done(null, jwtPayload)
        } catch (error) {
            console.log(error);

            done(error);
        }
    }
)