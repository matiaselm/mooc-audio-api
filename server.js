// server.js
import dotenv from 'dotenv';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import connectMongo from './db/db.js';
import audioRoute from './routes/audioRoute.js';

dotenv.config({ path: '.env' });

const currentDate = new Date();
const time = currentDate.getHours() + ":" + currentDate.getMinutes();

(async () => {
  try {
    const conn = await connectMongo();

    if (conn) {
      console.log(`[${time}] Connected successfully`);
    } else {
      console.error({ message: `[${time}] Connection to mongo failed` })
    }

    const app = express();

    app.use(cors());
    app.use(json());
    app.use(urlencoded({ extended: true }));

    app.use('/audio', audioRoute);

    app.listen({ port: 3000 }, () =>
      console.log(`[${time}] Server ready at localhost:3000`));
  } catch (e) {
    console.error({ message: e.message })
  }
})();