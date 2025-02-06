import fs from 'fs';
import winston from 'winston';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logFormatConsole = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const logFormatFile = winston.format.combine(
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// Corrigindo o caminho dos diretórios
const logFilesDir = join(__dirname, 'logfiles');
const infoLogPath = join(logFilesDir, 'info.log');
const errorLogPath = join(logFilesDir, 'error.log');
const debugLogPath = join(logFilesDir, 'debug.log');

// Garantindo que os diretórios existam
winston.transports.File.prototype._createLogDirIfNotExist = function () {
  const logDir = dirname(this.dirname);
  if (!winston.transports.File.logDirCreated) {
    try {
      fs.mkdirSync(logDir, { recursive: true });
      winston.transports.File.logDirCreated = true;
    } catch (err) {
      throw err;
    }
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: logFormatConsole,
    }),
    new winston.transports.File({
      format: logFormatFile,
      filename: infoLogPath,
      level: 'info',
      maxsize: 5242880,
      maxFiles: 10,
      silent: true, // write in file
    }),
    new winston.transports.File({
      format: logFormatFile,
      filename: errorLogPath,
      level: 'error',
      maxsize: 5242880,
      maxFiles: 10,
      silent: true, // write in file
    }),
    new winston.transports.File({
      format: logFormatFile,
      filename: debugLogPath,
      level: 'debug',
      maxsize: 5242880,
      maxFiles: 10,
      silent: true, // write in file
    }),
  ],
});

const globalDebugMode = false;

export const info = async (msg) => {
  try {
    logger.info(`[PID:${process.pid}] ${msg}`);
    return true;
  } catch (error) {
    throw error;
  }
};

export const debug = async (msg) => {
  // if (globalDebugMode) {
    try {
      logger.debug(`[PID:${process.pid}] ${msg}`);
    } catch (error) {
      throw error;
    }
  // }
  return true;
};

export const error = async (msg) => {
  try {
    logger.error(`[PID:${process.pid}] ${msg}`);
    return true;
  } catch (error) {
    throw error;
  }
};
