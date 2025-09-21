import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  PORT: process.env.PORT || 8674,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3359',
  DB: {
    DB_NAME: process.env.DB_NAME,
    MONGO_URI: process.env.MONGO_URI,
  },
  // logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
};

export default envConfig;
