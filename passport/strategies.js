'use strict';
import passport from 'passport';
import passportJWT from 'passport-jwt'; 

import BearerStrategy from 'passport-http-bearer';
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
import dotenv from 'dotenv';

console.log('secret', process.env.JWT_SECRET);
// JWT strategy for handling bearer token
passport.use(new BearerStrategy(
    (token, done) => {
      console.log('token', token);
      try {
        let authenticated = false;

        if(token === process.env.TOKEN) authenticated = true;

        if (authenticated) {
          return done(null, authenticated);
        } else {
          return done(null, false);
        }
      } catch (e) {
        return done(null, false);
      }
    },
));

export default passport;