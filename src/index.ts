import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.URI || '', {});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server lintening in port ${port}`);
});