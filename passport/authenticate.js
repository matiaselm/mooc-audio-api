'use strict';
import passport from './strategies.js';

export default (req, res) => {
  return new Promise((resolve, _) => {
      passport.authenticate('bearer', {session: false}, (error, client) => {
          if (error || !client) {
              resolve(false);
          }
          resolve(client);
      })(req, res);
  });
};