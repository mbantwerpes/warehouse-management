import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import user from './lib/routes/user';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/user', user);

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
