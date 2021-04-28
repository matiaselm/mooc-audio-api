// server.js
import { ApolloServer } from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectMongo from './db/db.js';
import audioRoute from './routes/audioRoute.js';
import userRoute from './routes/userRoute.js';

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

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use('/audio', audioRoute);
    app.use('/user', userRoute);

    const apolloServer = new ApolloServer({
      typeDefs: schemas,
      resolvers
    });

    apolloServer.applyMiddleware({app});

    app.listen({ port: 3000 }, () =>
      console.log(`[${time}] Server ready at localhost:3000`));
  } catch (e) {
    console.error(`[${time}] error: ${e.message}`)
  }
})();