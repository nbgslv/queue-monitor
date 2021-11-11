import express from 'express';
import dotenv from 'dotenv';
import indexLoader from './src/loaders';
import Logger from './src/loaders/logger';

dotenv.config();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

async function startServer() {
  const app: express.Application = express();
  await indexLoader.init({ app });
}

startServer()
  .then(() => Logger.silly('Server Started'))
  .catch(e => Logger.error(e));
