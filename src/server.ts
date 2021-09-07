import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import user from './lib/routes/user';
import techcomponent from './lib/routes/techComponent';
import order from './lib/routes/order';
import { connectDatabase } from './lib/database';

const app = express();
const { PORT = 3001 } = process.env;

if (!process.env.MONGO_DB_URL) {
  throw new Error('No MONGO_DB_URL env variable');
}

app.use(express.json());

app.use('/api/techcomponent', techcomponent);
app.use('/api/user', user);
app.use('/api/order', order);

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

connectDatabase(process.env.MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
});
