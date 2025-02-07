import { createRequire } from 'module';
import fs from 'fs/promises';

const require = createRequire(import.meta.url);

const swaggerAutogen = require('swagger-autogen');
const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/api.js'];

const generateSwagger = async () => {
  const swaggerAutogenInstance = swaggerAutogen();

  const swaggerOutputContent = await fs.readFile(outputFile, 'utf8');
  const swaggerOutput = JSON.parse(swaggerOutputContent);

  await swaggerAutogenInstance(swaggerOutput, endpointsFiles);
};

generateSwagger();
