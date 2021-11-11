import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
// import router from '../api/v1/router';

const expressLoader = ({ app }: { app: express.Application }) => {
  app.head('/status', (req, res) => {
    res.status(200).end();
  });
  app.enable('trust proxy');
  app.disable('x-powered-by');

  app.use(
    cors({
      origin: [
        'https://rush-tickets-mefik-82mh9.ondigitalocean.app',
        'https://rushtickets.co.il',
        'https://www.rushtickets.co.il',
        'http://localhost:3000',
      ],
      credentials: true,
    })
  );
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // app.use('/api/v1/', router());

  // Return the express app
  return app;
};

export default expressLoader;
