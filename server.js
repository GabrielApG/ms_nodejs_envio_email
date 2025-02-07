import express from 'express';
import { info } from './src/log/index.js';
import routes from './src/routes/api.js';
import swaggerUi from 'swagger-ui-express';
import * as fs from 'fs/promises';
import HttpStatus from './src/app/helpers/HttpStatus.js';

const swaggerFilePath = './swagger_output.json';
const swaggerFileContent = await fs.readFile(swaggerFilePath, 'utf-8');
const swaggerFile = JSON.parse(swaggerFileContent);
global.HttpStatus = HttpStatus;

const app = express();

app.use('/', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(process.env.SERVER_PORT || 3000, () => {
  info(`-- Routes --`);
  info(`Health Check: ${process.env.BASE_URL}:${process.env.SERVER_PORT}/health`);
  info(`Url: ${process.env.BASE_URL}:${process.env.SERVER_PORT}`);
});
