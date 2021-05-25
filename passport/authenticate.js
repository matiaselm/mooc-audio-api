'use strict';
import passport from './strategies.js';

const checkAuth = (req, res) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', (err, client) => {
      if (err || !client) {
        resolve(false);
      }
      resolve(client);
    })(req, res);
  });
};

export default checkAuth;