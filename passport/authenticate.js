'use strict';
import passport from './strategies.js';

export default (req, res) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', (err, user) => {
      if (err || !user) {
        resolve(false);
      }
      resolve(user);
    })(req, res);
  });
};