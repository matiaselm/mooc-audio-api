'use strict';
import passport from 'passport';
import passportJWT from 'passport-jwt';
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
import dotenv from 'dotenv';

console.log('secret', process.env.JWT_SECRET);
// JWT strategy for handling bearer token
passport.use(new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      console.log('payload', jwtPayload);
      try {
        if(jwtPayload.token === process.env.TOKEN) client = { loggedIn: true };

        if (client !== null) {
          return done(null, client);
        } else {
          return done(null, false);
        }
      } catch (e) {
        return done(null, false);
      }
    },
));

export default passport;