import pino from 'pino';

import envConfig from './envConfig';

const transport = pino.transport({
  options: {
    colorize: true,
    singleLine: true,
  },
  target: 'pino-pretty',
});

const logger = pino(
  {
    level: envConfig.LOG_LEVEL,
    redact: ['user.password', 'user.phone'],
    timestamp: pino.stdTimeFunctions.isoTime,
    serializers: {
      req: (req) => {
        return {
          method: req.method,
          url: req.url,
          userAgent: req.headers?.['user-agent'],
        };
      },
      res: (res) => {
        return {
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
        };
      },
      err: pino.stdSerializers.err,
    },
  },
  transport,
);

export default logger;
