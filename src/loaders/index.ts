import express from 'express';
import expressLoader from './express';
import mongooseLoader from './mongoose';
import graphqlLoader from './graphql';
import Logger from './logger';

const indexLoader = {
  init: async ({ app }: { app: express.Application }) => {
    await mongooseLoader();
    Logger.silly('MongoDB Initialized');
    await expressLoader({ app });
    Logger.silly('Express Initialized');
    await graphqlLoader({ app });
    Logger.silly('GraphQL initialized');
  },
};

export default indexLoader;
