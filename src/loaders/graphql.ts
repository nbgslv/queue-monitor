import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import Logger from './logger';
import typeDefs from '../models/index.typeDefs';
import resolvers from '../models/index.resolvers';
import config from '../config';

const graphqlLoader = async ({ app }: { app: express.Application }) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });

  await server.start();

  server.applyMiddleware({
    app,
    cors: {
      origin: ['http://localhost:3000'],
    },
  });

  app.listen(process.env.PORT, () =>
    Logger.silly(`Server ready at http://localhost:${config.port}${server.graphqlPath}`)
  );

  return app;
};

export default graphqlLoader;
