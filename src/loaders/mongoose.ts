import mongoose from 'mongoose';
import config from '../config';

const mongooseLoader = async () => {
  await mongoose.connect(config.mongoDbUri || '', {
    autoIndex: false,
  });
  mongoose.set('debug', config.environment === 'development');
};

export default mongooseLoader;
