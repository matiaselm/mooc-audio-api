// server.js
import { ApolloServer } from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import dotenv from 'dotenv';
import express from 'express';
import connectMongo from './db/db.js';
import checkAuth from './passport/authenticate';

dotenv.config({ path: '.env' });

const currentDate = new Date();
const time = currentDate.getHours() + ":" + currentDate.getMinutes();

(async () => {
  try {
    const conn = await connectMongo();
    const app = express();

    if (conn) {
      console.log(`[${time}] Mongo connected`);
    } else {
      console.error({ message: `[${time}] Connection to mongo failed` })
    }

    // checkouAuthentication = passport/authenticate.js
    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
      context: async ({ req, res }) => {
        try {
          const user = await checkAuth(req, res);
          return {
            req, res, user
          }
        } catch (error) {
          console.log(`Context error: ${error.message}`);
        }
      }
    });
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

  /*  app.listen({ port: 3000 }, () =>
      console.log(`[${time}] Server ready at localhost:3000`));
  */
    await new Promise(resolve => app.listen({ port: 3000 }, resolve));
    console.log(`[${time}] Server ready at localhost:3000`);
  } catch (e) {
    console.error(`[${time}] error: ${e.message}`)
  }
})();