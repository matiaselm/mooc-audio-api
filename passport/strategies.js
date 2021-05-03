'use strict';
import passport from 'passport';
import {Strategy} from 'passport-local';
import bcrypt from 'bcrypt';
import passportJWT from 'passport-jwt';
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// JWT strategy for handling bearer token
passport.use(new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      console.log('payload', jwtPayload);
      try {
        let user = null;
        if(jwtPayload.username === process.env.USER) user = {id: 1, username: process.env.USER};

        if (user !== null) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (e) {
        return done(null, false);
      }
    },
));

export default passport;