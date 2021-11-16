import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import swaggerUI from 'swagger-ui-express';

import routes from './routes';
const SwaggerDocument = require('../swagger_output.json');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.URI || '', {});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(SwaggerDocument));

app.listen(port, () => {
  console.log(`Server lintening in port ${port}`);
});