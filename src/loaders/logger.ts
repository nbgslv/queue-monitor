import winston from 'winston';

const transports = [];
transports.push(
  new winston.transports.Console({
    level: 'silly',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.cli(),
      winston.format.colorize({ level: true })
    ),
  })
);
transports.push(
  new winston.transports.File({
    filename: `./logs/file-name.log`,
    format: winston.format.combine(
      winston.format.combine(winston.format.timestamp(), winston.format.splat())
    ),
  })
);

const Logger = winston.createLogger({
  level: 'silly',
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.cli(),
    winston.format.colorize({ level: true })
  ),
  transports,
});

export default Logger;
