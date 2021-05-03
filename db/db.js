'use strict';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectMongo = async () => {
  console.log('db_url', process.env.DB_URL)
  try {
    const connection = await mongoose.connect(process.env.DB_URL,
        {
          user: process.env.MONGO_USER,
          pass: process.env.MONGO_PASS,
          keepAlive: true,
          useNewUrlParser: true,
          useFindAndModify: false,
          useCreateIndex: true,
          useUnifiedTopology: true,
        });
    return connection;
  } catch (e) {
    console.log('Connection to db failed: ' + e);
  }
};

export default connectMongo;